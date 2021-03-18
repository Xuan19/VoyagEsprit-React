// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// == Import
import Home from 'src/containers/Home';
import Travel from 'src/containers/Travel';
import Loader from 'src/components/Loader';
import Header from 'src/containers/Header';
import LoginForm from 'src/containers/LoginForm';
import Registration from 'src/containers/Registration';
import Profile from 'src/containers/Profile';

import './styles.css';

// == Composant
const App = ({ fetchTravels, loading, checkLogged }) => {
  useEffect(() => {
    fetchTravels();
    checkLogged();
  }, []); // effet exécuté seulement après le premier rendu de l'application
  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <Route
            path="/"
            exact
          >
            <Home />
          </Route>

          <Route
            path="/connexion"
          >
            <LoginForm />
          </Route>

          <Route
            path="/travel/:id"
          >
            <Travel />
          </Route>

          <Route
            path="/inscription"
          >
            <Registration />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

        </>
      )}
    </div>
  );
};

App.propTypes = {
  // pas de paramètre
  fetchTravels: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // pas de paramètre
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
