import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import { IComment, ITopic } from "../../@types";
import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import TopicComment from "../TopicComment";
import { useAuth } from "../../hook/useAuth";
import { createComment, getCommentsByTopic } from "../../services";

type TopicCardProps = {
    topic: ITopic;
}

function TopicCard({
    topic
}: TopicCardProps) {
    // USER
    const {user} = useAuth();

    // STATES - CONTROLL
    const [messageError, setMessageError] = useState ('')
    const [messageSuccess, setMessageSuccess] = useState ('')

    // COMMENTS 
    const [showComments, setShowComments] = useState (false)
    const [comment, setComment] = useState<IComment>({} as IComment)
    const [comments, setComments] = useState<IComment[]>([])
    const [totalComments, setTotalComments] = useState(0)

    const handleClickComment = () => {
        setShowComments(!showComments);
    }
    const postComment = async (contentText: string): Promise<void> => {

        const commentForm: IComment = {
            user: user,
            topic: topic,
            content: contentText
        }

        createComment(commentForm)
            .then(result => {
                setComment(result.data);
                setTotalComments(totalComments+1);

                setComments([...comments, result.data]);

                setMessageSuccess('Comentário efetuado com sucesso!');
                setTimeout(() => {
                    setMessageSuccess('');
                }, 5000);

            })
            .catch(error => {
                setMessageError(error.message)
            })
    }
    
    // REPOSTS

    // LIKES

    // EFFECT
    useEffect(() => {

        //TO-DO: Comments
        getCommentsByTopic( topic )
            .then(result => {
                const dados: IComment[] = result.data;
                setComments(dados);
                setTotalComments(dados.length);

                //Verifico se o usuário comentou este topic
                const found = dados.find(item => (item.user?.id == user?.id));
                if (found) {
                    setComment(found);
                }
            })
            .catch(error => {
                setMessageError(error.message);
            });

        //TO-DO: REPOSTS

        //TO-DO: LIKES

    }, []);

    return (
        <div id="topic-card">
            <TopicCardHeader 
                createdAt={topic.createdAt} 
                onwer={topic.owner}
            />   

            <TopicCardBody 
                content={topic.content}
            />

            <TopicCardActions 
                commented={Boolean(comment.user)}
                totalComments={totalComments}
                clickComments={handleClickComment}
            />

            {showComments && (
                <TopicComment 
                    comments={comments}
                    postComment={postComment}
                />
            )}

            <Snackbar
                open={Boolean(messageError)}
                autoHideDuration={6000}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                
                <Alert 
                    severity="error" 
                    variant="filled"
                    onClose={() => setMessageError('')}
                    >
                    {messageError}
                </Alert>
                
            </Snackbar>

            <Snackbar
                open={Boolean(messageSuccess)}
                autoHideDuration={6000}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                
                <Alert 
                    severity="success" 
                    variant="filled"
                    onClose={() => setMessageSuccess('')}
                    >
                    {messageSuccess}    
                </Alert>
                
            </Snackbar>
        </div>
    )
}

export default TopicCard;