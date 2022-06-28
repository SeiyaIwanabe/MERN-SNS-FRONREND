import React from 'react';
import './home.scss';
import { SideBar } from '../../components/sidebar/SideBar';
import { TopBar } from '../../components/topbar/TopBar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { RightBar } from '../../components/rightbar/RightBar';

export const Home = () => {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <SideBar />
                <TimeLine />
                <RightBar />
            </div>
        </>
    );
};
