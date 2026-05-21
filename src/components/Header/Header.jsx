import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/about">
            <span className="logo-accent">FOX</span> PORTFOLIO
          </Link>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
              <li className="nav-item">
              <Link to="/Home" className="nav-link" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" >
                SERVICE
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">CONTACT</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Button variant="secondary" className="contact-btn">HIRE ME</Button>
          <button className="burger-menu" onClick={toggleMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
