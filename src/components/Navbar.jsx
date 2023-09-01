/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/Home/Logo_1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="navbar-brand">
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li className="nav_hover">
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </a>
          </li>
          <li className="nav_hover">
            <a
              href="#about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </a>
          </li>
          <li className="nav_hover">
            <a
              href="#expertise"
              style={{ textDecoration: "none", color: "black" }}
            >
              Expertise
            </a>
          </li>
          <li className="nav_hover">
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </a>
          </li>
          <li>
            <button
              className="nav-button_1"
              style={{ fontFamily: "Raleway, 'sans-serif' " }}
            >
              Hire Resource
            </button>
          </li>
          <li>
            <button
              className="nav-button_2"
              style={{ fontFamily: "Raleway, 'sans-serif' " }}
            >
              Contact Sales
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
