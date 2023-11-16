import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [guestDropdown, setGuestDropdown] = useState(false);
    const [signUpDropdown, setSignUpDropdown] = useState(false);

    const toggleGuestDropdown = () => {
        setGuestDropdown(!guestDropdown);
        setSignUpDropdown(false);
    };

    const toggleSignUpDropdown = () => {
        setSignUpDropdown(!signUpDropdown);
        setGuestDropdown(false);
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
                        Guest
                    </button>
                    {guestDropdown && (
                        <div className="dropdown-content">
                            <a href="login">Log in as user</a>
                            <a href="login">Log in as event owner</a>
                            <a href="login">Log in as admin</a>
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <button
                        className={`header-button signup ${signUpDropdown ? 'active' : ''}`}
                        onClick={toggleSignUpDropdown}
                    >
                        Sign up
                    </button>
                    {signUpDropdown && (
                        <div className="dropdown-content">
                            <a href="register">Sign up as user</a>
                            <a href="register">Sign up as event owner</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
