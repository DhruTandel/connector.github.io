import React from 'react'
import Header from './compoent/Header';
import { Outlet } from 'react-router-dom';

const RouterHome=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    );
}
export default RouterHome;