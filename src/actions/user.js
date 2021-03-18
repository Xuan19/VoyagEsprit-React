import { GetFormattedDateUserInfo } from 'src/utils';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOG_OUT = 'LOG_OUT';
export const HANDLE_REGISTER = 'HANDLE_REGISTER';
export const SAVE_REGISTER = 'SAVE_REGISTER';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const HANDLE_PROFILE = 'HANDLE_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (token, firstName, lastName) => ({
  type: SAVE_USER,
  token,
  firstName,
  lastName,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const handleRegister = () => ({
  type: HANDLE_REGISTER,
});

export const saveRegister = (data) => ({
  type: SAVE_REGISTER,
  data,
});

export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});

export const saveUserInfo = (birthday, email, firstName, lastName, phoneNumber) => ({
  type: SAVE_USER_INFO,
  birthday,
  email,
  firstName,
  lastName,
  phoneNumber,
});

export const handleProfile = () => ({
  type: HANDLE_PROFILE,
});

export const saveProfile = () => ({
  type: SAVE_PROFILE,
});
