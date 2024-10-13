import React from 'react';
import '../App.css';
import logo from '../resource/LatestLogo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Coffee Shop Logo" />
        </div>
        <div className="info">
          <nav className="nav-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="login">
          <nav className="nav-links">
            <ul className="login-links">
              <li><a href="#signIn">Sign In</a></li>
              <li className="signup-item"><a href="#signUp">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
