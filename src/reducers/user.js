import {
  CHANGE_FIELD,
  SAVE_USER,
  LOG_OUT,
  SAVE_REGISTER,
  SAVE_USER_INFO,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_IS_SUBMIT,
  CHANGE_DATE,
  SET_IS_REGISTERED_FALSE,
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
  isSubmit: false,
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
        loading: false,
      };

    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        loading: false,
      };

    case SAVE_REGISTER:
      return {
        ...state,
        isRegistered: true,
      };

    case SAVE_USER_INFO:
      return {
        ...state,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        email: action.data.email,
        // image: action.image,
        birthday: action.data.birthday,
        phoneNumber: action.data.phoneNumber,
        loading: false,
        isLogged: true,

      };

    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };

    case SET_IS_SUBMIT:
      return {
        ...state,
        isSubmit: true,
      };

    case CHANGE_DATE:
      return {
        ...state,
        birthday: action.date,
      };

    case SET_IS_REGISTERED_FALSE:
      return {
        ...state,
        isRegistered: false,
      };

    default: return state;
  }
};

export default userReducer;