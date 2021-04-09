import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Field from './Field';
import './loginForm.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  setLoadingTrue,
  userValide,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
    setLoadingTrue();
  };

  return (
    <div className="login">
      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <div className="login-title">Connexion</div>
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

      </form>
      <p className="login-redirect">
        Pas encore inscrit ? <Link to="/inscription" className="login-redirect-link">Inscrivez-vous</Link>
      </p>
      <p className="login-redirect">
        Mot de passe oublié ? <Link to="/mot-de-passe-oublie" className="login-redirect-link">Réinitialiser le mot de passe</Link>
      </p>

      {!userValide && (
        <div className="login-failed">
          <p>
            Une erreur est survenue , merci de vérifier :
          </p>
          <ul className="login-failed-erreurs">
            <li>- Votre email</li>
            <li>- Votre mot de passe</li>
          </ul>
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
  userValide: PropTypes.bool.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
};

export default LoginForm;
