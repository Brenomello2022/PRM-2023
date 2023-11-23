import { ChatBubble, Repeat, Favorite, ChatBubbleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ITopic } from "../../@types";

// CSS
import "./style.css"

type TopicCardActionsProps = {
    commented: boolean,
    totalComments: number,
    clickComments: () => void,
}

function TopicCardActions({ 
     commented,
     totalComments,
     clickComments
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">

            <Button 
                variant="text" 
                size="small" 
                startIcon={ commented ? <ChatBubble /> : <ChatBubbleOutline />}
                onClick={clickComments}
                >
                {totalComments}
            </Button>

            <Button variant="text" size="small" startIcon={<Repeat />}>
                33
            </Button>
            <Button variant="text" size="small" startIcon={<Favorite />}>
                33
            </Button>

        </div>
    )
} 

export default TopicCardActions;