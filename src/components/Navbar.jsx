/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/Home/Logo_1.png';
import { Link } from 'react-scroll';

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
          <Link
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}

            >
                Home
            </Link>
          </li>
          <li className="nav_hover">
          <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}

            >
                About
            </Link>
          </li>
          <li className="nav_hover">
          <Link
                to="expertise-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}

            >
                Expertise
            </Link>
          </li>
          <li className="nav_hover">
          <Link
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={2000}
                style={{ textDecoration: "none", color: "black" }}

            >
                Contact Us
            </Link>
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
