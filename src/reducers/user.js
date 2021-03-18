import {
  CHANGE_FIELD,
  SAVE_USER,
  LOG_OUT,
  LOG_IN,
  SAVE_REGISTER,
  SAVE_USER_INFO,
  SAVE_PROFILE,
} from '../actions/user';

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
  loading: true,
  birthday: '',
  phoneNumber: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.identifier]: action.newValue,
      };

    case LOG_IN:
      return {
        ...state,
        isLogged: false,
      };

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        firstName: action.firstName,
        lastName: action.lastName,
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

    case SAVE_USER_INFO:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        // image: action.image,
        birthday: action.birthday,
        phoneNumber: action.phoneNumber,
        loading: false,
      };

    case SAVE_PROFILE:
      return {
        ...state,
        loading: true,
      };

    default: return state;
  }
};

export default userReducer;