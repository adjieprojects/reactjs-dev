import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from './'

import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';

import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

const Layout = () => {
    useEffect(() => {
        document.body.classList.add(
            'hold-transition',
            'sidebar-mini',
            'layout-fixed',
        );
    }, []);

    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    )
}

export default Layout