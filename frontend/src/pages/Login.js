import React, { useState, useContext } from 'react';
import { TiUser, TiMail, TiKey, TiHome } from 'react-icons/ti';
import axios from 'axios';
import config from "../config.json";
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';
import Authcontext from "../components/AuthContext";

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  let navigate = useNavigate();
  const { setIsAuthenticated, setAccountType, setEmail } = useContext(Authcontext);

  const handleLogin = () => {
    if (loginEmail.length < 5 || password.length < 1) {
      setErrorText("Email or password are missing or are too short");
      return;
    }

    axios.post(config.url + '/api/v1/auth/authenticate', {
      email: loginEmail,
      password: password
    })
      .then(response => {
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
        let msg = 'Error authenticating';
        console.log(msg);
        setErrorText(msg);
      });
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const goToRegisterPage = () => {
    navigate("/register");
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
        <div className="button-container">
          <button onClick={handleLogin} className="centered-button">LOG IN</button>
        </div>
        {errorText && <p className="error-text">{errorText}</p>}
      </div>
      <div className="register-button-container">
        <button onClick={goToRegisterPage} className="register-button">
          You don't have an account? Sign up here.
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
