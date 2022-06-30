import React, { FC, useEffect, useState } from 'react';
import './TimeLine.scss';
import { Post } from '../post/Post';
import { MongoPostType } from '../../Type';
import { Share } from '../share/Share';
import axios from 'axios';
// import { Posts } from '../../dammyData';

interface Props {
    username?: string;
}

export const TimeLine: FC<Props> = ({ username }) => {
    const [posts, setPosts] = useState<MongoPostType[]>([]);

    // ページ読み込み時に投稿データを取得
    useEffect(() => {
        // useEffectの中ではasyncは使えないので別途で関数を用意する
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(`/posts/profile/${username}`)
                : await axios.get('/posts/timeline/62b9254bf0dfe57fcf7bd0ae');
            setPosts(response.data);
        };
        fetchPosts();
    }, [username]);

    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share />
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}
            </div>
        </div>
    );
};
