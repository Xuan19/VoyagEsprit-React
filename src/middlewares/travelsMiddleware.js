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
      // console.log(store.getState().travels.loading);
      api.get('http://localhost:8000/api/v1/public/main_travels_form_info')
        .then((response) => {
          //  console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          store.dispatch(saveMainTravelsFormInfo(response.data));
        })
        .catch(() => {
          localStorage.clear();
          api.get('http://localhost:8000/api/v1/public/main_travels_form_info')
            .then((response) => {
              //  console.log(response.data);
              // je voudrais enregistrer response.data dans le state => nouvelle action
              store.dispatch(saveMainTravelsFormInfo(response.data));
            })
            .catch((error) => {
              console.warn(error);
            });
        });

      next(action);
      break;

    case FILTER:
      // console.log(store.getState().travels.loading);
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
        // withCredentials: true,
        data: {
          destination,
          category,
          startDate,
          // StartCity,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveFilteredInfo(response.data));
          //localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          console.log(error.response.data);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default travelsMiddleware;
