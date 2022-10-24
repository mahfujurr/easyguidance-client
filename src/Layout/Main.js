import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
        <div className="bg-image ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;