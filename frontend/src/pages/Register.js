import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey } from 'react-icons/ti'; 

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        
    };

    return (
        <div className="register">
            <h2><TiUser className="input-icon" style={{ width: '180px', height: '70px' }} /></h2>
            <div className="input-container">
                <TiUser className="input-icon" />
                <input
                    type="text"
                    placeholder="Name.."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <TiMail className="input-icon" />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-container">
            <TiKey className="input-icon" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="button-container"></div>
            <button onClick={handleRegister} className="centered-button" style={{ width: '100px', height: '30px' }}>SIGN UP</button>
        </div>
    );
}
export default Register;