import axios from 'axios';
import { FETCH_TRAVEL, saveTravel } from 'src/actions/travel';

const travelMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  const id = localStorage.getItem('idTravel');
  switch (action.type) {
    case FETCH_TRAVEL:
      // console.log('on est prêt à récupérer les recettes depuis l\'API');
      axios.get(`http://localhost:8000/api/v1/travel/${id}`)
        .then((response) => {
          //console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          store.dispatch(saveTravel(response.data));
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
export default travelMiddleware;
