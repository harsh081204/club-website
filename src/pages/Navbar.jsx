import React, { useState, useEffect } from "react";
import "../pages/Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import ring from "../assets/ring.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setIsScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${
        isScrolled
          ? scrollDirection === "up"
            ? "navbar-scrolled-up"
            : "navbar-hidden"
          : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="Energy Club Logo" />
        EnergyClub
      </div>
      <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <NavLink to="/" exact onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/About" onClick={closeMenu}>
            <li>About</li>
          </NavLink>
          <NavLink to="/Gallery" onClick={closeMenu}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/Upevent" onClick={closeMenu}>
            <li className="upcoming-events-link">Upcoming Events</li>
          </NavLink>
        </ul>
      </div>
      <NavLink to="/Upevent">
        <button className="register-button">
          <img src={ring} alt="Register" />
          <p>Upcoming Events</p>
        </button>
      </NavLink>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
