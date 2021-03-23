import { SAVE_MAIN_TRAVELS_FORM_INFO, SAVE_FILTERED_INFO, CHANGE_FIELD, CHANGE_DATE } from '../actions/travels';

const initialState = {
  listTravels: [],
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
        listTravels: action.data.mainTravels,
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
        [action.value]: action.label,
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
      };

    default: return state;
  }
};

export default travelsReducer;