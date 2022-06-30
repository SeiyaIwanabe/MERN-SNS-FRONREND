import React, { useEffect, useState } from 'react';
import { SideBar } from '../../components/sidebar/SideBar';
import { TopBar } from '../../components/topbar/TopBar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { RightBar } from '../../components/rightbar/RightBar';
import './Profile.scss';
import { MongoUserType } from '../../Type';
import axios from 'axios';

export const Profile = () => {
    // TODO: .envの設定
    // const PUBLICK_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    // ユーザーのstate
    const [user, setUser] = useState<MongoUserType>({
        _id: '',
        username: '',
        description: '',
        email: '',
        password: '',
        profilePicture: '',
        coverPicture: '',
        folllowes: [],
        folllowings: [],
        isAdmin: false,
        createdAt: null,
        updatedAt: null,
        __v: null,
    });

    // ページ読み込み時に投稿データを取得
    useEffect(() => {
        // useEffectの中ではasyncは使えないので別途で関数を用意する
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=Iwanabe`);
            setUser(response.data);
        };
        fetchUser();
    }, []);

    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">
                                {user.description}
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine username="Iwanabe" />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    );
};
