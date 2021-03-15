import { CHANGE_FIELD, SAVE_USER, LOG_OUT, SAVE_REGISTER } from '../actions/user';

const initialState = {
  /** contenu du champ e-mail */
  email: '',
  /** contenu du champ password */
  password: '',
  passwordConfirm: '',
  /** indique si l'utilisateur est loggué */
  isLogged: false,
  /** informations de l'utilisateur */
  userData: null,
  firstName: '',
  lastName: '',
  isRegistered: false,

};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };

    case SAVE_REGISTER:
      return {
        ...state,
        isRegistered: true,
      };

    default: return state;
  }
};

export default userReducer;