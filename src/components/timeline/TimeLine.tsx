import React from 'react';
import { Share } from '../share/Share';
import './TimeLine.scss';

export const TimeLine = () => {
    return (
        <div className="timeline">
            <div className="timelineWrapper">
                <Share />
            </div>
        </div>
    );
};
