/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/Home/Logo_1.png';
import { Link } from 'react-scroll';
import { PopupWidget } from 'react-calendly';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCalendy, setOpenCalendy] = useState(false)
  const openCalendly = () => {
    setOpenCalendy(true);
  }

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
          <Link
            to="contact" // This scrolls to the section with id="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
          >
            <button
              className="nav-button_1"
              style={{ fontFamily: "Raleway, 'sans-serif' " }}
            >
              Hire Resource
            </button>
            </Link>
          </li>
          <li>
            <button
              className="nav-button_2"
              style={{ fontFamily: "Raleway, 'sans-serif' " }}
              onClick={openCalendly}
            >
              Contact Sales
            </button>
            {openCalendy && (
        <PopupWidget
        url="https://calendly.com/codseedpak/30min"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#ffb703"
        onClose={() => setOpenCalendy(false)}
      />
      )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
