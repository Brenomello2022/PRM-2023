import { Avatar, Typography } from "@mui/material";
import { IUser } from "../../@types";
import { FormattedDate, IntlProvider } from "react-intl"

// CSS
import './style.css';

type TopicCardHeaderProps = {
    createdAt: Date | undefined;
    onwer: IUser | undefined;
}

function TopicCardHeader({
    createdAt,
    onwer
}: TopicCardHeaderProps ) {
    return(
        <div id="topic-card-header">
            <Avatar alt={onwer?.fullname} />

            <div className="card-header-text">

                <Typography variant="h6">
                    {onwer?.fullname}
                </Typography>

                <Typography variant="caption">

                    <IntlProvider locale="pt-BR">
                        Criado em <FormattedDate value={createdAt} day='2-digit' 
                        month="2-digit" year="numeric" />
                    </IntlProvider>
                    
                </Typography>

            </div>
            
        </div>
    )
}

export default TopicCardHeader;