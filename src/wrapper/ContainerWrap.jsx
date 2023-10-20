import React from 'react'
import { Header } from '../components';

const ContainerWrap = (Component, Title) => function HOC() {
    return (
        <div className="content-wrapper">
            <Header ContainerTitle={Title}/>

            <section className="content">
                <div className="container-fluid">
                    <Component/>
                </div>
            </section>

        </div>
    )
}

export default ContainerWrap