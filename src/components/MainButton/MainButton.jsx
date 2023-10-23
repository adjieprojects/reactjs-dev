import React from 'react'
import { Link } from 'react-router-dom'

import './MainButton.scss'

const MainButton = ({ label, href }) => {
    return (
        <>
            <Link to={href} className="btn bg-primary text-uppercase text-xs font-weight-bold px-4 main__button">{label}</Link>
        </>
    )
}

export default MainButton