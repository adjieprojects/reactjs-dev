import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';

import { SignIn } from "./layouts/Auth";
import { AppLayout } from "./layouts/App";
import { Dashboard, Users } from './pages';
import './App.scss';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="sign-in" element={<SignIn />}></Route>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<Users />} />
            </Route>
        </>
    )
)

const App = () => {
    return <RouterProvider router={router} />
}

export default App