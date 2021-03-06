import { CHANGE_FIELD, SAVE_USER } from '../actions/user';

const initialState = {
  /** contenu du champ e-mail */
  email: '',
  /** contenu du champ password */
  password: '',
  /** indique si l'utilisateur est loggué */
  isLogged: false,
  /** informations de l'utilisateur */
  userData: null,
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
        isLogged: action.isLogged,
        userData: action.userData,
      };

    default: return state;
  }
};

export default userReducer;