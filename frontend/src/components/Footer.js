import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="left-section">
                <h3>Do you need help?</h3>
                <p className='contact-text'>Contact us at:</p>
                <div className="contact-info">
                    <div className="phone-info">
                        <img width="30" height="30" src="https://img.icons8.com/clouds/100/phone.png" alt="phone" />
                        <p className='phone'>+123-456-7890</p>
                    </div>
                    <div className="email-info">
                        <img width="30" height="30" src="https://img.icons8.com/clouds/100/new-post.png" alt="new-post"/>
                        <p className='email'>interactivemapteam@e-mail.com</p>
                    </div>
                </div>
            </div>
            <div className="middle-section">
            <a href="/soon" target="_blank" rel="noopener noreferrer">
                    <p>Privacy Policy</p>
                </a>
                <a href="/soon" target="_blank" rel="noopener noreferrer">
                    <p>Terms and Conditions</p>
                </a>
            </div>

            <div className="right-section">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img width="60" height="60" src="https://img.icons8.com/clouds/100/facebook-new.png" alt="facebook-new" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img width="60" height="60" src="https://img.icons8.com/clouds/100/instagram-new--v3.png" alt="instagram-new--v3" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
