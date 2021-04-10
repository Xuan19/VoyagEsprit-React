// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src={logo} alt="" className="logo" />
    </div>
    <div className="footer-navigation">
      <NavLink className="footer-link" to="/contact">Contact</NavLink>
    </div>
  </footer>
);

// == Export
export default Footer;
