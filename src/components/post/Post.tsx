import React, { FC, useEffect, useState } from 'react';
import './Post.scss';
import { MoreVert } from '@mui/icons-material';
import { MongoUserType } from '../../Type';
import axios from 'axios';
// import { Users } from '../../dammyData';

interface Props {
    post: {
        id: number;
        description: string;
        img: string;
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

    // ユーザーのstate
    const [user, setUser] = useState<MongoUserType>({
        _id: '',
        username: '',
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
            const response = await axios.get(`/users/${post.userId}`);
            console.log(response.data);
            setUser(response.data);
        };
        fetchUser();
    }, []);

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
                            src={user.profilePicture || '/assets/noAvatar.png'}
                            alt=""
                            className="postProfileImg"
                        />
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.description}</span>
                    <img src={post.img} alt="" className="postImg" />
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
                            {like}人がいいねしました
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
