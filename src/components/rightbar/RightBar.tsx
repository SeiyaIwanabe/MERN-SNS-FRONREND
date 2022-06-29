import React, { FC } from 'react';
import { Online } from '../online/Online';
import { Users } from '../../dammyData';
import './RightBar.scss';

interface Props {
    profile?: boolean;
}

export const RightBar: FC<Props> = ({ profile }) => {
    // Home画面でのRightBar
    const HomeRightBar = () => {
        return (
            <>
                <div className="eventContainer">
                    <img
                        src="/assets/sun-flower.jpg"
                        alt=""
                        className="starImg"
                    />
                    <span className="eventText">
                        <b>フォロワー限定</b>イベント開催中
                    </span>
                </div>
                <img src="/assets/sun-flower.jpg" alt="" className="eventImg" />
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <Online user={user} key={user.id} />
                    ))}
                </ul>
                <p className="promotionTitle">プロモーション広告</p>
                <img
                    src="/assets/sun-flower.jpg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">ショッピング</p>
                <img
                    src="/assets/sun-flower.jpg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">カーショップ</p>
                <img
                    src="/assets/sun-flower.jpg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">アナゴ株式会社</p>
            </>
        );
    };

    // Profile画面でのRightBar
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">ユーザー情報</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">出身:</span>
                        <span className="rightbarInfoKey">福岡</span>
                    </div>
                    <h4 className="rightbarTitle">あなたの友達</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">seiya</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">seiya</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">seiya</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">seiya</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img
                                src="/assets/sun-flower.jpg"
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">seiya</span>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
};
