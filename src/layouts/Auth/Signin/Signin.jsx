import React from 'react'

import 'admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';

import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/jquery-ui/jquery-ui.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';

import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'

import { images } from '../../../constants'
import { InputText } from '../../../components'
import './Signin.scss'

const Signin = () => {

    return (
        <div className="signin-set">
            <div className="container bg-light border rounded-xl shadow-lg p-4">
                <div className="row">
                    <div className="col rounded-xl p-5 d-flex align-items-center">
                        <div className="flex-grow-1">
                            <div>

                                <div className="float-left">
                                    <h2 className="text-bold mb-0 text-primary">Synty</h2>
                                    <small className="d-block mb-4">Enter your credentials to access your account</small>
                                </div>
                                <div className="float-right">
                                    <img src={images.TMSLogo} alt="" width={100} className="mt-3"/>
                                </div>
                                <div className="clearfix"></div>
                                
                                <InputText name="Username" type="text" label="Username" />
                                <InputText name="Password" type="Password" label="Password" />

                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="!#" className="text-sm">Forgot password?</a>
                                    <a href="/" className="btn bg-primary text-uppercase text-xs font-weight-bold px-4 main__button">Sign In</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col bg-primary rounded-xl p-4 d-flex align-items-center">
                        <div className="flex-grow-1">
                            <h5 className="mb-1 text-bold">TMS Digital Ecosystem</h5>
                            <small className="d-block mb-4">Synty is part of TMS Group</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin