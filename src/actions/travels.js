export const FETCH_MAIN_TRAVELS_FORM_INFO = 'FETCH_MAIN_TRAVELS_FORM_INFO';
export const SAVE_MAIN_TRAVELS_FORM_INFO = 'SAVE_MAIN_TRAVELS_FORM_INFO';
export const FETCH_FORM_INFO = 'FETCH_FORM_INFO';
export const SAVE_FORM_INFO = 'SAVE_FORM_INFO';
export const SAVE_FILTERED_INFO = 'SAVE_FILTERED_INFO';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_DATE = 'CHANGE_DATE';
export const FILTER = 'FILTER';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
export const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
export const SET_IS_FAVORI = 'SET_IS_FAVORI';

export const fetchMainTravelsFormInfo = () => ({
  type: FETCH_MAIN_TRAVELS_FORM_INFO,
});

export const saveMainTravelsFormInfo = (data) => ({
  type: SAVE_MAIN_TRAVELS_FORM_INFO,
  data,
});
export const fetchFormInfo = () => ({
  type: FETCH_FORM_INFO,
});

export const saveFormInfo = (formData) => ({
  type: SAVE_FORM_INFO,
  formData,
});

export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const changeDate = (startDate) => ({
  type: CHANGE_DATE,
  startDate,
});

export const handleFilter = () => ({
  type: FILTER,
});

export const saveFilteredInfo = (filteredData) => ({
  type: SAVE_FILTERED_INFO,
  filteredData,
});

export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE,
});

export const setIsFavori = () => ({
  type: SET_IS_FAVORI,
});
