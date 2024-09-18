

import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* À propos de nous */}
                <div className="footer-section about">
                    <h4>Qui sommes-nous</h4>
                    <p>
                        Ahamed Hassani M’homa est un étudiant en développement web passionné dans la création des applications web professionnelles. Basé au Sénégal, Ahamed apporte créativité et excellence technique à chaque projet.
                    </p>
                </div>

                {/* Liens rapides */}
                <div className="footer-section links">
                    <h4>Liens rapides</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Suivez-nous */}
                <div className="footer-section social">
                    <h4>Suivez-nous</h4>
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
                        <input type="email" placeholder="Entrer votre email" />
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2024 Ahamed Hassani M'homa. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
