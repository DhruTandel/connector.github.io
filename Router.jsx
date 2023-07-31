import React from 'react';

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import RouterAbout from './RouterAbout';
import RouterContact from './RouterContact';
import RouterHome from './RouterHome';
import Error from './Error';
import MainHeader from './MainHeader'
import Search from './Search';


const Router=()=>{
    return(
        <>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHeader/>}>
            <Route index element={<RouterHome/>}/>
            <Route path="/about" element={<RouterAbout/>}/>
            <Route path="/contact" element={<RouterContact/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            {/* <Route path="*" element={<Navigate to="/"/>}/> */}
            </Route> 
        </Routes>
       </BrowserRouter>
        
        </>
    );
}
export default Router;