/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import './Main.css'

const Main = () => {
    return (
        <div className='w-100'>
            <Home/>
            <Outlet/>
        </div>
    );
};

export default Main;