import { Alert, Box, Snackbar } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { getProfileByUsename } from "../../services";

function TopicPage() {

    const { user } = useAuth();
    const params = useParams();

    const [profile, setProfile] = useState({});
    const [messageError, setMessageError] = useState('')

    useEffect(() => {

        const username = params.username ? params.username : user?.username;

        if (username) {
            getProfileByUsename(username)
            .then(result => {
                setProfile(result.data)

                
            })
            .catch(error => {
                setMessageError(String(error.message))
            })
        }

    }, [])

    const topics = [
        {
            owner: {fullname: 'Helena Cristina'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            comments: 150,
            reposts: 290,
            likes: 300,
            createdAt: '2023-08-15 21:34:00'
        },

        {
            owner: {fullname: 'Felisberto Jonas'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            comments: 67,
            reposts: 90,
            likes: 101,
            createdAt: '2023-08-11 09:34:00'
        },

        {
            owner: {fullname: 'Bernardo Lucas'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            comments: 100,
            reposts: 104,
            likes: 114,
            createdAt: '2023-08-01 15:34:00'
        },

        {
            owner: {fullname: 'Osvaldo Karlos'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            comments: 45,
            reposts: 76,
            likes: 83,
            createdAt: '2023-08-08 10:34:00'
        },

        {
            owner: {fullname: 'Iliane Jussara'},
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            comments: 120,
            reposts: 111,
            likes: 178,
            createdAt: '2023-08-06 07:34:00'
        }
    ]

    return (
        <Box id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>
            <HeaderProfile user={profile} />
            <TopicList items={topics}/>

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
        </Box>
    )
}

export default TopicPage;