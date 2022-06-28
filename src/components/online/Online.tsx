import React, { FC } from 'react';

interface Props {
    user: {
        id: number;
        profilePicture: string;
        username: string;
    };
}

export const Online: FC<Props> = ({ user }) => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img
                    src={user.profilePicture}
                    alt=""
                    className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    );
};
