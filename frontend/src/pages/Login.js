import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey } from 'react-icons/ti';
import axios from 'axios';
import config from "../config.json";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const handleLogin = () =>
    {
        if(email.length < 5 || password.length < 1)
        {
            setErrorText("Email or password are missing or are too short")
            return
        }

        axios.post(config.url + '/api/v1/auth/authenticate', {
            email: email,
            password: password
        })
            .then(response => {
                // Handle successful login
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                // Handle error
                let msg = 'Error authenticating'
                console.log(msg);
                setErrorText(msg)
            });
    };


    return (
        <div className="login">
            <h2><TiUser className="input-icon" style={{ width: '180px', height: '70px' }} /></h2>
            <div className="input-container">
            </div>
<div className="input-container">
    <TiMail className="input-icon" />
    <input
        className="input"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
    <div className="button-container">
        <button onClick={handleLogin} className="centered-button">LOG IN</button>
    </div>
    </div>
    
        );
    }
    
    
    export default Login;