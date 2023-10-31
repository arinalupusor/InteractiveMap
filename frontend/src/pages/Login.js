import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey } from 'react-icons/ti'; 
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        
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