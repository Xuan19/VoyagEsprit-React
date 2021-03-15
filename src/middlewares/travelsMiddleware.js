import axios from 'axios';

import { FETCH_TRAVELS, saveTravels } from 'src/actions/travels';

const travelsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TRAVELS:
      // console.log(store.getState().travels.loading);
      axios.get('http://localhost:8000/api/v1/travels')
        .then((response) => {
          //  console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          store.dispatch(saveTravels(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default travelsMiddleware;
