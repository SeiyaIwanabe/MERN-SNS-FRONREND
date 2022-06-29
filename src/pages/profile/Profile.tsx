import React from 'react';
import { SideBar } from '../../components/sidebar/SideBar';
import { TopBar } from '../../components/topbar/TopBar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { RightBar } from '../../components/rightbar/RightBar';
import './Profile.scss';

export const Profile = () => {
    // TODO: .envの設定
    // const PUBLICK_FOLDER = process.env.PUBLIC_URL;
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
                            <h4 className="profileInfoName">seiya</h4>
                            <span className="profileInfoDesc">
                                Webディレクターです
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    );
};
