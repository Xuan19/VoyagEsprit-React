// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// == Import
import Home from 'src/components/Home';
import Travel from 'src/containers/Travel';
import Contact from 'src/components/Contact';
import Loader from 'src/components/Loader';
import Destinations from 'src/components/Destinations';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import LoginForm from 'src/containers/LoginForm';
import Registration from 'src/containers/Registration';
import Profile from 'src/containers/Profile';

import './styles.css';

// == Composant
const App = ({ fetchMainTravelsFormInfo, loading, checkLogged }) => {
  useEffect(() => {
    fetchMainTravelsFormInfo();
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
            <Home loading={loading} />
          </Route>

          <Route
            path="/destinations"
          >
            <Destinations loading={loading} />
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

          <Route path="/contact">
            <Contact />
          </Route>
          <Footer />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  // pas de paramètre
  fetchMainTravelsFormInfo: PropTypes.func.isRequired,
  fetchFormInfo: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // pas de paramètre
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
