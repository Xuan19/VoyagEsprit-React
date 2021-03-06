export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOG_OUT = 'LOG_OUT';
export const HANDLE_REGISTER = 'HANDLE_REGISTER';
export const SAVE_REGISTER = 'SAVE_REGISTER';

export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue,
  identifier,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
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
