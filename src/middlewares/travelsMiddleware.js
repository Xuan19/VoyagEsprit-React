import axios from 'axios';
import api from 'src/api';

import {
  FETCH_MAIN_TRAVELS_FORM_INFO,
  saveMainTravelsFormInfo,
  FILTER,
  saveFilteredInfo,
} from 'src/actions/travels';

const travelsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MAIN_TRAVELS_FORM_INFO:
      api.get('http://localhost:8000/api/v1/public/main_travels_form_info')
        .then((response) => {
          store.dispatch(saveMainTravelsFormInfo(response.data));
        })
        .catch(() => {
          localStorage.setItem('token', '');
          api.get('http://localhost:8000/api/v1/public/main_travels_form_info')
            .then((response) => {
              store.dispatch(saveMainTravelsFormInfo(response.data));
            })
            .catch((error) => {
              console.warn(error.response.data);
            });
        });

      next(action);
      break;

    case FILTER:
      // eslint-disable-next-line no-case-declarations
      const {
        destination,
        category,
        startDate,
        // StartCity,
      } = store.getState().travels;
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/public/travels',
        data: {
          destination,
          category,
          startDate,
          // StartCity,
        },
      })
        .then((response) => {
          store.dispatch(saveFilteredInfo(response.data));
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      next(action);
      break;

    default:
      next(action);
  }
};
export default travelsMiddleware;
