/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { GetFormattedDateUserInfo, DateIsNoNul, transfomrNoNull } from 'src/utils';
import Loader from 'src/components/Loader';
import NavDashboard from './NavDashboard';
import './profile.scss';
import Field from './Field';

const Profile = ({
  fetchUserInfo,
  isLogged,
  loading,
  firstName,
  lastName,
  email,
  birthday,
  phoneNumber,
  handleProfile,
  changeField,
}) => {
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleProfile();
    document.location.reload();
  };

  return (
    <main className="profile">
      {loading && <Loader />}
      {!loading && (
        <div>
          {!isLogged && (
            <div>
              <div className="profile-redirect-content">
                <h2 className="profile-redirect-title">Vous n'êtes visiblement pas connecté !</h2>
                <Link className="profile-redirect-link" to="/connexion">Se connecter</Link>
              </div>
            </div>
          )}
          {isLogged && (
            <div className="profile-container">
              <form autoComplete="off" className="profile-input-form" onSubmit={handleSubmit}>
                <Field
                  name="lastName"
                  label="Nom"
                  onChange={changeField}
                  value={lastName}
                />
                <Field
                  name="firstName"
                  label="Prénom"
                  onChange={changeField}
                  value={firstName}
                />
                <Field
                  name="email"
                  label="Adresse email"
                  onChange={changeField}
                  value={email}
                />
                <Field
                  name="birthday"
                  label="Date de naissance"
                  onChange={changeField}
                  // value={GetFormattedDateUserInfo(birthday)}
                  value={birthday}
                  placeholder="jj-mm-aaaa"
                />
                <Field
                  name="phoneNumber"
                  type="tel"
                  label="Téléphone"
                  onChange={changeField}
                  value={phoneNumber}
                  placeholder="06XXXXXXXX"
                />
                <div className="profile-button">
                  <button type="submit" className="btn-custom-button-white-save-button-primary" title="Sauvegarder">
                    <div className="button-content">
                      <span className="text">
                        Sauvegarder
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleProfile: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
};

export default Profile;
