import React from 'react'
// import { Outlet } from "react-router-dom";

import { Navbar, Sidebar, Header } from "../components";

const AppWrap = (Component, Title) => function HOC() {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <div className="content-wrapper">
                <Header ContainerTitle={Title}/>

                <section className="content">
                    <div className="container-fluid">
                        <Component/>
                        {/* <Outlet/> */}
                    </div>
                </section>

            </div>
        </>
    )
}

export default AppWrap