// == Import npm
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavDashboard = () => (
  <div className="dashboard-header">
    <nav className="dashboard-navigation">
      <NavLink className="dashboard-navigation-link" to="/tableau-de-bord">Réservations</NavLink>
      <NavLink className="dashboard-navigation-link dashboard-navigation-linkactive" to="/profil">Profil</NavLink>
    </nav>

  </div>
);


// == Export
export default NavDashboard;
