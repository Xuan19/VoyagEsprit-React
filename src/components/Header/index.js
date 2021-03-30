import React from 'react';
import './header.scss';
import logo from 'src/assets/logo.png';
// import bgImg from 'src/assets/header.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ logOut, isLogged }) => {
  const handleLogout = () => {
    localStorage.clear();
    document.location.replace('/');
    logOut();
  };

  return (
    <div className="header">
      {/* <img src={logo} alt="logo" to="/" /> */}
      <div className="logo"><Link to="/"><img src={logo} alt="logo" /></Link></div>
      <div className="navigation-login-content">
        {isLogged && (<Link className="navigation-login" to="/Profile">Profile</Link>)}
        {!isLogged && (<Link className="navigation-login" to="/connexion">Connexion</Link>)}
        {isLogged && (<Link onClick={handleLogout} className="navigation-login" to="/">Deconnexion</Link>)}
      </div>
    </div>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
export default Header;