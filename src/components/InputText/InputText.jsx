import React from 'react'

import './InputText.scss'

const InputText = ({ name, type, label }) => {
    return (
        <>
            <div className="form-group text-sm mb-4">
                <label htmlFor={name}>{label}</label>
                <input type={type} className="form-control text-sm input__text" id={name} placeholder={label}/>
            </div>
        </>
    )
}

export default InputText