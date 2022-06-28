import React from 'react';
import './SideBar.scss';
import {
    Bookmark,
    Home,
    MessageRounded,
    Notifications,
    Person,
    Search,
    Settings,
} from '@mui/icons-material';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className="sidebarIcon" />
                        <span className="sidebarListItemText">Home</span>
                    </li>
                    <li className="sidebarListItem">
                        <Search className="sidebarIcon" />
                        <span className="sidebarListItemText">Search</span>
                    </li>
                    <li className="sidebarListItem">
                        <Notifications className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Notifications
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <MessageRounded className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            MessageRounded
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon" />
                        <span className="sidebarListItemText">Profile</span>
                    </li>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        <span className="sidebarListItemText">Settings</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="sidebarFriendImg"
                        />
                        <span className="sidebarFriendName">seiya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="sidebarFriendImg"
                        />
                        <span className="sidebarFriendName">seiya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="sidebarFriendImg"
                        />
                        <span className="sidebarFriendName">seiya</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
