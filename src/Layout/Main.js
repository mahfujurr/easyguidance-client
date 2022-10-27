import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
        <div className="bg-image ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;