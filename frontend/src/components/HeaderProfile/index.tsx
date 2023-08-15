import { Avatar, Box, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.png';

import './style.css';

function HeaderProfile() {
    return (
        <Box id="header-profile">

            <Box className="header-profile-background">
                <img src={banner} />
            </Box>

            <Box className="header-profile-detail">
                <Avatar alt="Fulano de Tal" style={{width: 128, height: 128}} src={avatar} 
                className="header-profile-detail-avatar"/>

                <Box className="header-profile-detail-text">
                    <Typography variant="h5">
                        Fulano de Tal
                    </Typography>

                    <Typography variant="subtitlel" component="h6">
                        @fulanodetal
                    </Typography>

                    <Typography variant="subtitlel" component="p">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Obcaecati natus quam ratione molestiae laboriosam?
                        Illo nesciunt blanditiis, accusamus veritatis porro repellendus,
                        expedita voluptatem, optio eos accusantium quia error aspernatur nostrum!
                    </Typography>

                    <Typography variant="caption">
                        <CalendarMonthOutlined />
                        Entrou em 14 de Agosto de 2023
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default HeaderProfile;