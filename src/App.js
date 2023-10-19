import React, { useEffect } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';


import { Dashboard, Users } from './container';
import './App.scss';

import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';

import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Dashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
        </Route>
    )
)

const App = () => {
    useEffect(() => {
        document.body.classList.add(
            'hold-transition',
            'sidebar-mini',
            'layout-fixed',
        );
    }, []);

    return (
        <RouterProvider router={router} />
    )
}

export default App