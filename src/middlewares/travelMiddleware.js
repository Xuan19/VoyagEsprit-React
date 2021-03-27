import axios from 'axios';
import api from 'src/api';
import { FETCH_TRAVEL, saveTravel } from 'src/actions/travel';

const travelMiddleware = (store) => (next) => (action) => {
  const id = localStorage.getItem('idTravel');
  switch (action.type) {
    case FETCH_TRAVEL:
      api.get(`http://localhost:8000/api/v1/public/travel/${id}`)
        .then((response) => {
          store.dispatch(saveTravel(response.data));
        })
        .catch(() => {
          localStorage.setItem('token', '');
          api.get(`http://localhost:8000/api/v1/public/travel/${id}`)
            .then((response) => {
              store.dispatch(saveTravel(response.data));
            })
            .catch((error) => {
              console.warn(error);
            });
        });

      next(action);
      break;

    default:
      next(action);
  }
};
export default travelMiddleware;
