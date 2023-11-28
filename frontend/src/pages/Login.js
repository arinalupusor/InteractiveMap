import React, { useState, useContext } from 'react';
import { TiUser, TiMail, TiKey, TiHome } from 'react-icons/ti';
import axios from 'axios';
import config from "../config.json";
import {useNavigate} from "react-router-dom";
import Authcontext from "../components/AuthContext";
import Footer from '../components/Footer';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    let navigate = useNavigate();
    const {setIsAuthenticated, setAccountType, setEmail} = useContext(Authcontext);

    const handleLogin = () =>
    {
        if(loginEmail.length < 5 || password.length < 1)
        {
            setErrorText("Email or password are missing or are too short")
            return
        }

        axios.post(config.url + '/auth/authenticate', {
            email: loginEmail,
            password: password
        })
            .then(response => {
                // Handle successful login
                console.log(response.data);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('accountType', response.data.type);
                setIsAuthenticated(true);
                setAccountType(response.data.type);
                setEmail(response.data.email);
                navigate("/");
            })
            .catch(error => {
                // Handle error
                let msg = 'Error authenticating'
                console.log(msg);
                setErrorText(msg)
            });
    };
    const goToHomePage = () => {
        navigate("/");
    };
    const goToRegisterPage = () => {
        navigate("/register/USER");
    };


    return (
        <div>
            <button className="go-back-button" onClick={goToHomePage}>
                <TiHome className="home-icon" /> Go back to home page
            </button>
            <div className="login">
                <h2><TiUser className="input-icon" style={{ width: '180px', height: '70px' }} /></h2>
                <div className="input-container">
                    <TiMail className="input-icon" />
                    <input
                        className="input"
                        type="email"
                        placeholder="E-mail"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                </div>
                <div className="input-container">
                    <TiKey className="input-icon" />
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="centered-button" onClick={handleLogin}>LOG IN</button>
                {errorText && <p className="error-text">{errorText}</p>}
            </div>
            <label className="register-button-container">
                <a href="/register/EVENTOWNER" id="registerLink">You don't have an account? Sign up here.</a>
            </label>
            <Footer/>
        </div>
    );
}

export default Login;
