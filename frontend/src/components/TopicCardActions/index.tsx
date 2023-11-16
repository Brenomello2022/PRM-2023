import { ChatBubble, Repeat, Favorite } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ITopic } from "../../@types";

// CSS
import "./style.css"

type TopicCardActionsProps = {
    topic: ITopic;
}

function TopicCardActions({ 
    topic
}: TopicCardActionsProps) {
    return (
        <div id="topic-card-actions">

            <Button variant="text" size="small" startIcon={<ChatBubble />}>3</Button>
            <Button variant="text" size="small" startIcon={<Repeat />}>33</Button>
            <Button variant="text" size="small" startIcon={<Favorite />}>33</Button>

        </div>
    )
} 

export default TopicCardActions;