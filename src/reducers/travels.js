import {
  SAVE_MAIN_TRAVELS_FORM_INFO,
  SAVE_FILTERED_INFO,
  CHANGE_FIELD,
  CHANGE_DATE,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,

} from '../actions/travels';

const initialState = {
  listTravels: [],
  listMainTravels: [],
  // indique si on affiche le loader
  loading: true,
  listDestinations: [],
  listCategories: [],
  // listStartCities: [],
  destination: '',
  category: '',
  startDate: '',
  // startCity: '',
};

const travelsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MAIN_TRAVELS_FORM_INFO:
      return {
        ...state,
        loading: false,
        listMainTravels: action.data.mainTravels,
        listDestinations: action.data.formInfo.destinations,
        listCategories: action.data.formInfo.categories,
      };
    // case SAVE_FORM_INFO:
    //   return {
    //     ...state,
    //     loading: false,
    //     listDestinations: action.formData.destinations,
    //     // listStartCities: action.travels,
    //     listCategories: action.formData.categories,
    //   };
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case CHANGE_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };

    case SAVE_FILTERED_INFO:
      return {
        ...state,
        listTravels: action.filteredData,
        loading: false,
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

    default: return state;
  }
};

export default travelsReducer;
