/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from './Field';

import './register.scss';

const Registration = ({
  changeField,
  handleRegister,
  firstName,
  lastName,
  email,
  password,
  passwordConfirm,
  isRegistered,
}) => {
  const emailValide = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  const passwordValide = password.length >= 6;
  const [recaptchaValide, setRecaptchaValide] = useState(false);
  const [formValide, setFormValide] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValide && passwordValide && password === passwordConfirm) {
      handleRegister();
    }
    else setFormValide(false);
  };

  return (
    <main className="register">
      <h1 className="register-title">Inscription</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-input">
          <div className="register-input-div">
            <label>Prénom*</label>
            <Field
              type="text"
              name="firstName"
              value={firstName}
              onChange={changeField}
            />
          </div>
          <div className="register-input-div">
            <label>Nom*</label>
            <Field
              type="text"
              name="lastName"
              value={lastName}
              onChange={changeField}
            />
          </div>
          <div className="register-input-email">
            <label>Email*</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={changeField}
            />
            {!emailValide && <div><p>Email n'est pas valide</p></div>}
          </div>
          <div className="register-input-email">
            <label>Mot de Passe*</label>
            <Field
              type="password"
              name="password"
              value={password}
              onChange={changeField}
            />
            {!passwordValide && <div><p>le mot de passe doit avoir minimum 6 chiffre</p></div>}
          </div>
          <div className="register-input-email">
            <label>Confirmation Mot de passe*</label>
            <Field
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={changeField}
            />
            {password !== passwordConfirm
              && <div><p>les mots de passe ne sont pas identiques</p></div>}
          </div>
        </div>
        <ReCAPTCHA
          className="ReCAPTCHA"
          sitekey="6LekdgAVAAAAAE0Oc1rd2KkpPCMprHY7cDzEtngU"
          onChange={() => {
            setRecaptchaValide(true);
          }}
        >
          {recaptchaValide
            && (
              <input className="register-send-input" type="submit" value="S'inscrire" />
            )}
        </ReCAPTCHA>
        {isRegistered
          && (
            <div className="register-send-ok">
              <p className="register-redirect-ok">
                Vous êtes maintenant inscrit,  <Link to="/connexion" className="register-redirect-link">Connectez-vous</Link>
              </p>
            </div>
          )}
        {!formValide
          && (
            <div className="register-send-nop">
              <p>Une erreur s'est produite</p>
            </div>
          )}
      </form>
      <p className="register-redirect">
        Déjà inscrit ? <Link to="/connexion" className="register-redirect-link">Connectez-vous</Link>
      </p>
    </main>
  );
};

Registration.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

export default Registration;
