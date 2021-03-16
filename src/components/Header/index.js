import React from 'react';
import './header.scss';
import logo from 'src/assets/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ logOut, isLogged }) => {
  const handleLogout = () => {
    localStorage.clear();
    logOut();
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="navigation-login-content">
        {/* {token && (<Link className="navigation-login" to="/tableau-de-bord">Tableau de bord</Link>)} */}
        {(!isLogged) && (<Link className="navigation-login" to="/connexion">Connexion</Link>)}
        {(isLogged) && (<Link onClick={handleLogout} className="navigation-login" to="/">Deconnexion</Link>)}
      </div>
    </div>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};
export default Header;