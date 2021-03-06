import { SAVE_TRAVELS } from '../actions/travels';

const initialState = {
  listTravels: [],
  // indique si on affiche le loader
  loading: true,
};

const travelsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRAVELS:
      return {
        ...state,
        listTravels: action.travels,
        loading: false,
      };

    default: return state;
  }
};

export default travelsReducer;