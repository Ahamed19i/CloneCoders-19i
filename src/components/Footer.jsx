

import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* À propos de nous */}
                <div className="footer-section about">
                    <h4>About Us</h4>
                    <p>
                        Ahamed Hassani M'homa is a passionate web developer with expertise in building professional websites. Based in the Comoros, Ahamed brings creativity and technical excellence to every project.
                    </p>
                </div>

                {/* Liens rapides */}
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Suivez-nous */}
                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://twitter.com/votreprofil" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com/votreprofil" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="footer-section newsletter">
                    <h4>Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2024 Ahamed Hassani M'homa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
