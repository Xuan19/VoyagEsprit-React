import { SAVE_TRAVEL } from '../actions/travel';

const initialState = {
  travel: {},
  // indique si on affiche le loader
  loading: true,
};

const travelReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRAVEL:
      return {
        ...state,
        travel: action.travel,
        loading: false,
      };

    default: return state;
  }
};

export default travelReducer;
