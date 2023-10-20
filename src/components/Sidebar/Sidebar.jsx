import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import { images } from '../../constants';

import './Sidebar.scss';

const Sidebar = () => {
    // eslint-disable-next-line
    const [menus, setMenus] = useState([
        {
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            path: '/',
        },
        {
            name: 'Users',
            icon: 'fas fa-users',
            path: 'users',
        },
    ])

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src={images.adminlteLogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={images.user2} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="info">
                            <a href="!#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            {
                                menus.map((menu,index) => (
                                    <li className="nav-item" key={index}>
                                        <NavLink to={menu.path} className="nav-link">
                                            <i className={`nav-icon ${menu.icon}`} />
                                            <p>
                                                {menu.name}
                                            </p>
                                        </NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>
    )
}

export default Sidebar