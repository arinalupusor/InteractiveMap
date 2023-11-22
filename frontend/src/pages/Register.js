import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey } from 'react-icons/ti';
import config from "../config.json"
import {useNavigate, useParams} from "react-router-dom";

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

    return (
        <div className="main-container">

            <div className="imagine-iconP">
            <img className="UserIcon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="User icon"></img>

            </div>

          <div className="register">

              <div className="input-container">
               <TiUser className="input-icon" />
                <input className="input"
                type="text"
                placeholder="Name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
               />
               </div>

               <div className="input-container">
              <TiMail className="input-icon" />
              <input className="input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
               </div>

            <div className="input-container">
            <TiKey className="input-icon" />
            <input className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
           </div>

            <div className="button-container">
            <button onClick={handleRegister} className="centered-button" style={{ width: '100px', height: '30px' }}>SIGN UP</button>
            </div>

           </div>
        </div>

    );
}
export default Register;