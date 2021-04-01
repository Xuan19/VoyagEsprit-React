// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <nav className="footer-navigation">
      {/* <NavLink className="footer-link" to="/contact">Contact</NavLink> */}
      <NavLink className="footer-link" to="/contact">Contact</NavLink>
    </nav>
    <div className="copyright">
      <img src={logo} alt="" className="footer-logo" />
    </div>
  </footer>
);

// == Export
export default Footer;
