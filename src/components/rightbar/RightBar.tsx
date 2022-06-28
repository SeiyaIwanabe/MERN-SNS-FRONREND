import React from 'react';
import './RightBar.scss';
import { Online } from '../online/Online';
import { Users } from '../../dammyData';

export const RightBar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    );
};
