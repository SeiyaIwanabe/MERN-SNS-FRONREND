import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import React from 'react';
import './Share.scss';

export const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src="/assets/sun-flower.jpg"
                        alt=""
                        className="shareProfileImg"
                    />
                    <input
                        className="shareInput"
                        placeholder="What are you doing?"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareButtons">
                    <div className="shareOptions">
                        <div className="shareoption">
                            <Image className="shareIcon" htmlColor="blue" />
                            <span className="shareOptionText">写真</span>
                        </div>
                        <div className="shareoption">
                            <Gif className="shareIcon" htmlColor="hotpink" />
                            <span className="shareOptionText">Gif</span>
                        </div>
                        <div className="shareoption">
                            <Face className="shareIcon" htmlColor="green" />
                            <span className="shareOptionText">気持ち</span>
                        </div>
                        <div className="shareoption">
                            <Analytics className="shareIcon" htmlColor="red" />
                            <span className="shareOptionText">投票</span>
                        </div>
                    </div>
                    <button className="shareButton">投稿</button>
                </div>
            </div>
        </div>
    );
};
