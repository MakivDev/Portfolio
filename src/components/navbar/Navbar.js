import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="header-nav">
        <div className="lattice">
          <h1>Лабораторні роботи</h1>
        </div>
        <div className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/lab1" className="nav-link">Лабораторна 1</Link>
          <Link to="/lab2" className="nav-link">Лабораторна 2</Link>
          <Link to="/lab3" className="nav-link">Лабораторна 3</Link>
          {/* Додай інші лабораторні роботи */}
        </div>
        <div className="nav-button" onClick={toggleMenu}>
          <div className="nav-button1">
            <div className="nav-button-up1"></div>
            <div className="nav-button-down1"></div>
          </div>
          <div className="nav-button2">
            <div className="nav-button-up2"></div>
            <div className="nav-button-down2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
