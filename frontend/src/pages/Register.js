import React, { useState } from 'react';
import { TiUser, TiMail, TiKey, TiHome } from 'react-icons/ti';
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import '../Register.css'; 
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const registrationData = {
      firstname: name,
      lastname: '',
      email,
      password,
    };
    console.log(registrationData);

    try {
      const response = await fetch(config.url + '/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      console.log(response);
      if (response.ok) {
        console.log('Înregistrare reușită');
        navigate("/login");
      } else {
        console.error('Înregistrare eșuată');
      }
    } catch (error) {
      console.error('Eroare de rețea:', error);
    }
  };
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
          <div className="button-container">
            <button onClick={handleRegister} className="centered-button" style={{ width: '100px', height: '30px' }}>SIGN UP</button>
          </div>
        </div>
      </div>
      <div className="login-button-container">
        <button onClick={goToLoginPage} className="login-button">
          Do you already have an account? Log in here.
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
