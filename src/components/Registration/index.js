/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
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
  setIsRegisteredFalse,
}) => {
  const [formValide, setFormValide] = useState(false);
  const [emailValide, setEmailValide] = useState(false);
  const [passwordValide, setPasswordValide] = useState(false);
  const [passwordConfirmValide, setPasswordConfirmValide] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailValide && !passwordValide && !passwordValide) {
      handleRegister();
      setFormValide(true);
      setIsRegisteredFalse(false);
    }
  };
  const HandleChangeField = (value, name) => {
    changeField(value, name);
  };

  const HandleChangeEmail = (value, name) => {
    changeField(value, name);
    if (value !== '') {
      setEmailValide(!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
    }
    if (value === '') {
      setEmailValide(false);
    }
  };

  const HandleChangePassword = (value, name) => {
    changeField(value, name);
    if (value !== '') {
      setPasswordValide(!(value.length >= 6));
    }

    if (value === '') {
      setPasswordValide(false);
    }
  };

  const HandleChangePasswordConfirm = (value, name) => {
    changeField(value, name);
    if (value !== '') {
      setPasswordConfirmValide(!(password === value));
    }
    if (value === '') {
      setPasswordConfirmValide(false);
    }
  };

  return (
    <main className="register">
      <h1 className="register-title">Inscription</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-inputs">
          <div className="register-input">
            <label>Prénom*</label>
            <Field
              type="text"
              name="firstName"
              value={firstName}
              onChange={HandleChangeField}
            />
          </div>
          <div className="register-input">
            <label>Nom*</label>
            <Field
              type="text"
              name="lastName"
              value={lastName}
              onChange={HandleChangeField}
            />
          </div>
          <div className="register-input">
            <label>Email*</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={HandleChangeEmail}
            />
            {emailValide && <div className="message-erreur"><p>email n'est pas valide</p></div>}
          </div>
          <div className="register-input">
            <label>Mot de Passe*</label>
            <Field
              type="password"
              name="password"
              value={password}
              onChange={HandleChangePassword}
            />
            {passwordValide && <div className="message-erreur"><p>le mot de passe doit avoir minimum 6 chiffre</p></div>}
          </div>
          <div className="register-input">
            <label>Confirmation Mot de passe*</label>
            <Field
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={HandleChangePasswordConfirm}
            />
            {passwordConfirmValide
              && <div className="message-erreur"><p>les mots de passe ne sont pas identiques</p></div>}
          </div>
          <input className="register-submit" type="submit" value="S'inscrire" />
        </div>
        {/* <ReCAPTCHA
          className="ReCAPTCHA"
          // style={{ display: 'inline-block' }}
          // style={{ transform: 'scale(0.77)' }}
          sitekey="6LekdgAVAAAAAE0Oc1rd2KkpPCMprHY7cDzEtngU"
          // size="normal"
          onChange={() => {
            setRecaptchaValide(true);
          }}
        >
          {recaptchaValide
            && (
              <input className="register-send-input" type="submit" value="S'inscrire" />
            )}
        </ReCAPTCHA> */}
        {isRegistered && formValide
          && (
            <div className="register-send-success">
              <p className="register-redirect-success">
                Vous êtes maintenant inscrit,  <Link to="/connexion" className="register-redirect-link">Connectez-vous</Link>
              </p>
            </div>
          )}

        {!isRegistered && formValide
          && (
            <div className="register-send-failed">
              <p>votre email existe déjà ou une erreur s'est produite</p>
            </div>
          )}
      </form>
      {isRegistered && (
      <p className="register-redirect">
        Déjà inscrit ? <Link to="/connexion" className="register-redirect-link">Connectez-vous</Link>
      </p>
      )}
    </main>
  );
};

Registration.propTypes = {
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  setIsRegisteredFalse: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

export default Registration;
