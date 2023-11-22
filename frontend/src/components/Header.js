import React, {useContext, useState} from 'react';
import './Header.css';
import Authcontext from "./AuthContext";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [guestDropdown, setGuestDropdown] = useState(false);
    const [signUpDropdown, setSignUpDropdown] = useState(false);
    const {isAuthenticated, setIsAuthenticated, accountType} = useContext(Authcontext);
    let navigate = useNavigate();

    const toggleGuestDropdown = () => {
        setGuestDropdown(!guestDropdown);
        setSignUpDropdown(false);
    };

    const toggleSignUpDropdown = () => {
        setSignUpDropdown(!signUpDropdown);
        setGuestDropdown(false);
        if(isAuthenticated)
        {
            localStorage.removeItem("email");
            localStorage.removeItem("token");
            localStorage.removeItem("accountType");
            setIsAuthenticated(false);
            navigate("/login")
        }
    };

    return (
        <div className="header">
            <div className="sun-icon">
                <img src="https://img.icons8.com/papercut/60/sun.png" alt="sun"/>
            </div>
            <div className="search-bar-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <img className="bird-icon" src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-chick-spring-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="external-chick-spring-vitaliy-gorbachev-flat-vitaly-gorbachev"/>
                </div>
            </div>
            <div className="header-title">
                Interactive Map
                <div className="cloud-icons">
                    <div className="cloud-icon cloud-left">
                        <img src="https://img.icons8.com/stickers/36/clouds.png" alt="clouds"/>
                    </div>
                    <div className="stars-icon">
                        <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/external-stars-christmas-victoruler-flat-victoruler.png" alt="external-stars-christmas-victoruler-flat-victoruler"/>
                    </div>
                    <div className="cloud-icon cloud-right">
                        <img src="https://img.icons8.com/stickers/36/clouds.png" alt="clouds"/>
                    </div>
                </div>
            </div>
            <div className="header-buttons">
                <img className="user-icon" src="https://img.icons8.com/pulsar-color/48/user.png" alt="user" />
                <div className="dropdown">
                    <button
                        className={`header-button ${guestDropdown ? 'active' : ''}`}
                        onClick={toggleGuestDropdown}
                    >
                        {isAuthenticated ? accountType : "Guest"}
                    </button>
                    {guestDropdown && (
                        <div className="dropdown-content">
                            <Link to="/login">Log in</Link>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button
                        className={`header-button signup ${signUpDropdown ? 'active' : ''}`}
                        onClick={toggleSignUpDropdown}
                    >{!isAuthenticated ? "Sign up" : "Logout" }
                    </button>
                    {!isAuthenticated && signUpDropdown && (
                        <div className="dropdown-content">
                            <Link to="/register/USER">Sign up as user</Link>
                            <Link to="/register/EVENTOWNER">Sign up as event owner</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
