import React from 'react';
import '../components/Footer.css'; 
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import fblogo from "../assets/fblogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="foot-text">
          <p>&copy; {new Date().getFullYear()} Energy Club. All Rights Reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fblogo} alt="Facebook logo"  />
          </a>
          <a href="https://www.linkedin.com/company/energy-club-a2a187339/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn logo" />
          </a>
          <a href="https://www.instagram.com/energyclub_psit/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
