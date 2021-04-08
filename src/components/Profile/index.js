/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { GetFormattedDateUserInfo, DateIsNoNul, transfomrNoNull } from 'src/utils';
import Loader from 'src/components/Loader';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import NavDashboard from './NavDashboard';
import './profile.scss';
import Field from './Field';
import { DatePickerWrapperStyles, ButtonStyled } from './ProfilStyled';
import 'react-datepicker/dist/react-datepicker.css';

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
  changeDate,
  setLoadingTrue,
}) => {
  registerLocale('fr', fr);

  useEffect(() => {
    fetchUserInfo();
    // setLoadingTrue();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleProfile();
    setLoadingTrue();
  };

  const handleDateChange = (evt) => {
    changeDate(evt);
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
                  // onChange={changeField}
                  value={email}
                />

                <div className="profile-data">
                  <div className="profile-data-label">
                    <label
                      // htmlFor={inputId}
                      className="form-fied-label">
                      Date de Naissance
                      <span className="required-indicator">*</span>
                    </label>
                  </div>
                  <div className="profile-data-input">
                    <DatePicker
                      name="birthday"
                      // selected={birthday ? `${birthday}` : ''}
                      value={birthday ? `${GetFormattedDateUserInfo(birthday)}` : ''}
                      onChange={handleDateChange}
                      // className="react-datepicker-wrapper"
                      wrapperClassName="datePicker"
                      // dateFormat="d MMMM,yyyy"
                      maxDate={new Date()}
                      // todayButton="Today"
                      showYearDropdown
                      scrollableYearDropdown
                      yearDropdownItemNumber={80}
                      placeholderText="Click pour choisir"
                      locale="fr"
                    />
                  </div>
                </div>
                <DatePickerWrapperStyles />
                <Field
                  name="phoneNumber"
                  type="tel"
                  label="Téléphone"
                  onChange={changeField}
                  value={phoneNumber}
                  placeholder="06XXXXXXXX"
                />
                <div className="profile-button">
                  <ButtonStyled
                    type="submit"
                    value="Sauvegarder"
                  />
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
  birthday: PropTypes.instanceOf(Date).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  // password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleProfile: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default Profile;
