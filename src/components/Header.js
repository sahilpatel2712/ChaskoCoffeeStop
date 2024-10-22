import React from "react";
import "../App.css";
import logo from "../resource/LatestLogo.png";
import { NavbarBurger, NavbarCross } from "../resource/svg/svg";

const Header = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Coffee Shop Logo" />
          <div
            className="toggle-button"
            onClick={() => setNav((prev) => !prev)}
          >
            {nav ? NavbarCross() : NavbarBurger()}
          </div>
        </div>
        <HeaderItem className={"horizontal"} />
        {nav ? <HeaderItem className={"vertical"} /> : null}
      </div>
    </header>
  );
};

export default Header;

const HeaderItem = ({ className }) => {
  return (
    <>
      <div className={"info-" + className}>
        <nav className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={"login-" + className}>
        <nav className="nav-links">
          <ul className="login-links">
            <li>
              <a href="#signIn">Sign In</a>
            </li>
            <li className="signup-item">
              <a href="#signUp">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
