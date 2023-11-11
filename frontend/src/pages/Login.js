import React, { useState } from 'react';
import { TiUser, TiMail,  TiKey } from 'react-icons/ti';
import axios from 'axios';
import config from "../config.json";
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    let navigate = useNavigate();
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
                navigate("/");
            })
            .catch(error => {
                // Handle error
                let msg = 'Error authenticating'
                console.log(msg);
                setErrorText(msg)
            });
    };


    return (
        <div className="main-container">

            <div className="imagini-icons">
                <div className="icon-userP">
                <img className="UserIcon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="User icon"></img>
                 </div>

                <div className="icon-cuibP">
                <img className="CuibPasari" src="https://img.icons8.com/external-justicon-flat-justicon/64/external-bird-spring-season-justicon-flat-justicon-1.png" alt="Cuib pasari"></img>
                </div>
                
               
            </div>

               

            <div className="login">

                  <div className="input-container1">
                  <TiMail className="input-icon1" />
                      
                      <input className="input1"
                       type="email"
                       placeholder="E-mail"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    
                    </div>


                  <div className="input-container2">
                      <TiKey className="input-icon2" />
                       <input className="input2"
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

         </div>
    
          );
    }
    
    
    export default Login;