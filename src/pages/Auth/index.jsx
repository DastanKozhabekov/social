import React from "react";
import './auth.scss'
import {LoginForm, RegisterForm} from '../../modules/'
import {Route, Routes} from 'react-router-dom'

const Auth = () =>{
    return (
        <div className="auth">
            <div className="auth__content">
                <Routes>
                    <Route exact path={"/"} element={<LoginForm/>}/>
                    <Route exact path={"/login"} element={<LoginForm/>}/>
                    <Route exact path={"/register"} element={<RegisterForm/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Auth