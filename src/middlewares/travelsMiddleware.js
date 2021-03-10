import axios from 'axios';

import { FETCH_TRAVELS, saveTravels } from 'src/actions/travels';

const travelsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_TRAVELS:
      axios.get('http://localhost:8000/api/v1/travels')
        .then((response) => {
          // console.log(response);
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
