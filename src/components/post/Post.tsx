import React, { FC, useState } from 'react';
import './Post.scss';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dammyData';

interface Props {
    post: {
        id: number;
        desc: string;
        photo: string;
        date: string;
        userId: number;
        like: number;
        comment: number;
    };
}

export const Post: FC<Props> = ({ post }) => {
    // いいねのstate
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            src={
                                Users.filter((user) => user.id === post.id)[0]
                                    .profilePicture
                            }
                            alt=""
                            className="postProfileImg"
                        />
                        <span className="postUserName">
                            {
                                Users.filter((user) => user.id === post.id)[0]
                                    .username
                            }
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img
                            src="/assets/sun-flower.jpg"
                            alt=""
                            className="likeIcon"
                            onClick={() => handleLike()}
                        />
                        <span className="postLikeCounter">
                            {like}がいいねしました
                        </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment}:コメント
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
