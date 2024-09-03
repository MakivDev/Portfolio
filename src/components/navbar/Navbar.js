import './navbar.css'

import LogoWite from "./img/LogoWhite.png"
import NavButton from "./img/nav-button.svg"

const Navbar = () => {
    return ( <div className="nav-container">
        <div className="header-nav">
          <a className="header-logo" href="#limit-line-projects">
            <img className="logo-img" src={LogoWite} alt="LogoWhite" />
            <p className="logo-name">Makiv</p>
          </a>
          <nav id="nav" className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#!" className="nav-link active"
                  ><span className="lattice">#</span>на-головну</a
                >
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link"
                  ><span className="lattice">#</span>проекти</a
                >
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link"
                  ><span className="lattice">#</span>про-мене</a
                >
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link"
                  ><span className="lattice">#</span>контакти</a
                >
              </li>
            </ul>
            <button id="nav-btn" className="nav-button">
              <img id="nav-btn-img" src={NavButton} alt="" />
            </button>
          </nav>
        </div>
      </div> );
}
 
export default Navbar;