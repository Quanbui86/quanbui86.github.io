import React from 'react';
import Header from '../pages/Header'
import Footer from '../pages/Footer'
// import Outlet
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;