import React from 'react';
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const location = useLocation();
    const shouldDisplayFooter = location.pathname === '/Home';
    if (!shouldDisplayFooter) {
        return null; 
    }

    return (
        <footer>
            <div className="map-section">
            </div>
            <hr />
            <section>
                <div className='Contact'>
                    <h3 >  Do you need help? </h3>
                    Contact 📞<a href="tel:+123-456-7890">+123-456-7890</a>
                </div>
            </section>
            <section>
                <div className="links">
                    <p>
                        <a href="privacy.html" className="privacy-link">Privacy Policy  </a>
                        <a href="terms.html" className="terms-link">Terms and conditions</a>
                    </p>
                </div>
            </section>
            <section>
                <div className="social-icons">
                    <p>
                        <img src="logo.png" alt="Instagram" style={{ width: '50px', height: '50px' }} />
                        <a href="Instagram">Instagram</a>
                        <img src="fb.png" alt="Facebook" style={{ width: '50px', height: '50px' }} />
                        <a href="Facebook">Facebook</a>
                    </p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;