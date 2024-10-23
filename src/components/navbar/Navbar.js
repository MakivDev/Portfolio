import React, { useState, useEffect } from 'react';
import './navbar.css';

import LogoWite from "./img/LogoWhite.png";
import NavButton from "./img/nav-button.svg";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // отримуємо поточний маршрут
  const [activeTab, setActiveTab] = useState('/'); // встановлюємо початкову активну вкладку

  useEffect(() => {
    setActiveTab(location.pathname); // оновлення активної вкладки при зміні марштуру
    window.scrollTo(0, 0);
  }, [location]); // масив залежностей, якщо щось з цього масиву зміниться то setActiveTab спрац.є знову та оновить activeTab

  return (
    <div className="nav-container">
      <div className="header-nav">
        <Link className="header-logo" to="/">
          <img className="logo-img" src={LogoWite} alt="LogoWhite" />
          <p className="logo-name">Makiv</p>
        </Link>
        <nav id="nav" className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${activeTab === '/' ? 'active' : ''}`}>
                <span className="lattice">#</span>На головну
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${activeTab === '/projects' ? 'active' : ''}`}>
                <span className="lattice">#</span>Проекти
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${activeTab === '/about' ? 'active' : ''}`}>
                <span className="lattice">#</span>Про-мене
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className={`nav-link ${activeTab === '/contacts' ? 'active' : ''}`}>
                <span className="lattice">#</span>Контакти
              </Link>
            </li>
          </ul>
          <button id="nav-btn" className="nav-button">
            <img id="nav-btn-img" src={NavButton} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
