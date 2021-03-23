import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Loader from 'src/components/Loader';
import Field from './Field';
import './loginForm.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  setLoadingFalse,
  setLoadingTrue,
  loading,
}) => {
  useEffect(() => {
    setLoadingFalse();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    setLoadingTrue();
  };

  return (
    <div className="login-form">
      {loading && <Loader />}
      {!loading && (
        <div>
          {isLogged && (
            <Redirect to="/" />
          )}
          {!isLogged && (

            <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>

              <h1 className="login-title">Connexion</h1>
              <Field
                name="email"
                placeholder="Email"
                onChange={changeField}
                value={email}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
              <button
                type="submit"
                className="login-form-button"
              >
                Envoyer
              </button>
              <p className="login-redirect">
                Pas encore inscrit ? <Link to="/inscription" className="login-redirect-link">Inscrivez-vous</Link>
              </p>
              <p className="login-redirect">
                Mot de passe oublié ? <Link to="/mot-de-passe-oublie" className="login-redirect-link">Réinitialiser le mot de passe</Link>
              </p>
              <div>
                {isLogged && (
                  <p className="reservation-redirect-ok">
                    Vous êtes connecté,  <Link to="*" className="reservation-redirect-link-ok">Retour à l'accueil</Link>
                  </p>
                )}
                {isLogged && (
                  <div className="register-redirect-nop">
                    <p>
                      Une erreur est survenue , merci de vérifier :
                    </p>
                    <ul className="register-redirect-nop-ul">
                      <li>- Votre email</li>
                      <li>- Votre mot de passe</li>
                      <li>- Que votre compte existe</li>
                    </ul>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  setLoadingFalse: PropTypes.func.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
