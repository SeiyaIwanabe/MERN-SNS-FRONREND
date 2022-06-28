import React from 'react';
import { MoreVert } from '@mui/icons-material';
import './Post.scss';

export const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="postProfileImg"
                        />
                        <span className="postUserName">seiya</span>
                        <span className="postDate">5分前</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">SnSを自作中です</span>
                    <img
                        src="/assets/sun-flower.jpg"
                        alt=""
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="likeIcon"
                        />
                        <span className="postLikeCounter">
                            5人がいいねしました
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">4:コメント</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
