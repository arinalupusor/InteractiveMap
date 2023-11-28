import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey, TiHome} from 'react-icons/ti';
import config from "../config.json"
import {useNavigate, useParams} from "react-router-dom";
import Footer from '../components/Footer';

function Register() {
    let {type} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleRegister = async () => {
        const registrationData = {
            firstname: name,
            lastname: '', // completați corespunzător
            email,
            password,
            type,
        };
        console.log(registrationData)

        try {
            const response = await fetch(config.url + '/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });
            console.log(response)
            if (response.ok) {
                // Înregistrare reușită
                console.log('Înregistrare reușită');
                navigate("/login");
            } else {
                // Înregistrare eșuată
                console.error('Înregistrare eșuată');
            }
        } catch (error) {
            console.error('Eroare de rețea:', error);
        }
    };
    if(type !== "EVENTOWNER" && type !== "USER")
        return null;

    const goToHomePage = () => {
        navigate("/");
    };
    const goToLoginPage = () => {
        navigate("/login");
    };
    return (
        <div>
            <button className="go-back-button" onClick={goToHomePage}>
                <TiHome className="home-icon" /> Go back to home page
            </button>
            <div className="main-container">
                <div className="register">
                    <h2><TiUser className="input-icon" style={{ width: '180px', height: '70px' }} /></h2>
                    <div className="input-container">
                        <TiUser className="input-icon" />
                        <input
                            className="input"
                            type="text"
                            placeholder="Name.."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                    <button onClick={handleRegister} className="centered-button" style={{ width: '100px', height: '30px' }}>SIGN UP</button>
                </div>
                <label>
                    <a href="/login" id="loginLink">Do you already have an account? Log in here.</a>
                </label>
                </div>
                <Footer/>
            </div>
            );

}
export default Register;