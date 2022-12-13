import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-top">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="footer-list">
                    <ul>
                        <li>Audiodescription</li>
                        <li>Investor Relations</li>
                        <li>legal information</li>
                    </ul>
                    <ul>
                        <li>Help center</li>
                        <li>Hiring</li>
                        <li>Cookies preferences</li>
                    </ul>
                    <ul>
                        <li>Gift cards</li>
                        <li>Conditions of use</li>
                        <li>Legal Notice</li>
                    </ul>
                    <ul>
                        <li>Press</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <p>Service code</p>
                <span>2022 - Arnaud Le Tallec, free to use, powred by theMovieDb</span>
            </div>
        </div>
    );
};

export default Footer;