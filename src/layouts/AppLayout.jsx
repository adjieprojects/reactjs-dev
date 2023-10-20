import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../components';

const AppLayout = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default AppLayout