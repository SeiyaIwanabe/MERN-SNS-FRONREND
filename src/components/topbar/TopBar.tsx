import React from 'react';
import { Text } from '@chakra-ui/react';
import { Chat, Notifications, Search } from '@mui/icons-material';
import './TopBar.scss';

export const TopBar = () => {
    return (
        <div className="topbarContaiber">
            <div className="topbarLeft">
                <Text fontSize="lg" color="tomato">
                    MERN-SNS
                </Text>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input type="text" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarItemIcons">
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <img
                        src="/assets/sun-flower.jpg"
                        alt=""
                        className="topbarImg"
                    />
                </div>
            </div>
        </div>
    );
};
