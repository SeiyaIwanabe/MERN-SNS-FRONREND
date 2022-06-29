import React from 'react';
import { CloseFriend } from '../closefriend/CloseFriend';
import { Users } from '../../dammyData';
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
import { Link } from 'react-router-dom';

export const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className="sidebarIcon" />
                        <Link to="/">
                            <span className="sidebarListItemText">Home</span>
                        </Link>
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
                        <Link to="/profile/seiya">
                            <span className="sidebarListItemText">Profile</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon" />
                        <span className="sidebarListItemText">Settings</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((user) => (
                        <CloseFriend user={user} key={user.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
