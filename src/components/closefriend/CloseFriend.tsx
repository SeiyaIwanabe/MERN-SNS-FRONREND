import React, { FC } from 'react';

interface Props {
    user: {
        id: number;
        profilePicture: string;
        username: string;
    };
}

export const CloseFriend: FC<Props> = ({ user }) => {
    return (
        <li className="sidebarFriend">
            <img
                src={user.profilePicture}
                alt=""
                className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
};
