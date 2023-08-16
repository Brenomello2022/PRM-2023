import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";

function TopicPage() {

    const profile = {
        fullname: 'Breno Balbinotti de Mello',
        username: 'BrenodeMello',
        description: 'revercse euq o ies oãn',
        creatdAt: '2023-08-15'
    }

    const topics = [
        {
            owner: {fullname: 'Helena Tereza'},
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
            owner: {fullname: 'Liriane Jussara'},
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
        </Box>
    )
}

export default TopicPage;