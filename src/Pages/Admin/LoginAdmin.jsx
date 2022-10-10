import React from 'react'
import { Link } from 'react-router-dom'

const LoginAdmin = () => {
    return (
        <div>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="/login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="/regis" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName">Email or username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>
                        <a href="/" class="btn btn-primary btn-block mb-3" role="button" aria-pressed="true">Sign In</a>
                    </form>
                </div>
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control" />
                            <label className="form-label" htmlFor="registerName">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" defaultValue id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" htmlFor="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block mb-3"><a href="/">Sign In</a></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin