import React from 'react';
import './home.scss';
import { SideBar } from '../../components/sidebar/SideBar';
import { TopBar } from '../../components/topbar/TopBar';

export const Home = () => {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <SideBar />
            </div>
        </>
    );
};
