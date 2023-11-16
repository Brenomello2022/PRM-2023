import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";
import { ITopic } from "../../@types";

type TopicCardProps = {
    topic: ITopic;
}

function TopicCard({
    topic
}: TopicCardProps) {
    return (
        <div id="topic-card">
            <TopicCardHeader 
                createdAt={topic.createdAt} 
                onwer={topic.owner}
            />   

            <TopicCardBody content={topic.content} />
            <TopicCardActions topic={topic} />
        </div>
    )
}

export default TopicCard;