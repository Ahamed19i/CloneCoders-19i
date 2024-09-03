
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importe le fichier CSS séparé

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">CloneCoders</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li>
            <Link to="/monparcours" className="nav-link">Mon parcours</Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
