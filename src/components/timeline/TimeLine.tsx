import React, { useEffect, useState } from 'react';
import './TimeLine.scss';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import axios from 'axios';
// import { Posts } from '../../dammyData';

export const TimeLine = () => {
    const [posts, setPosts] = useState([]);

    // ページ読み込み時に投稿データを取得
    useEffect(() => {
        // useEffectの中ではasyncは使えないので別途で関数を用意する
        const fetchPosts = async () => {
            const response = await axios.get(
                '/posts/timeline/62b9254bf0dfe57fcf7bd0ae'
            );
            console.log(response.data);
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share />
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </div>
    );
};
