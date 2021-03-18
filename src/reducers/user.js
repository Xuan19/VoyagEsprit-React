import {
  CHANGE_FIELD,
  SAVE_USER,
  LOG_OUT,
  SAVE_REGISTER,
  SAVE_USER_INFO,
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

    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        firstName: action.data.data.firstname,
        lastName: action.data.data.lastname,
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
        isLogged: true,
      };

    default: return state;
  }
};

export default userReducer;