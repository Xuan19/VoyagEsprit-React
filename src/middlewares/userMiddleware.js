import axios from 'axios';

import { LOG_IN, LOG_OUT, CHECK_LOGGED, saveUser } from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case LOG_IN: {
      // je récupère les informations dans le tiroir
      const { email, password } = store.getState().user;

      axios({
        method: 'post',
        url: 'http://localhost:8000/login',
        data: {
          email,
          // strictement équivalent à :
          // email: email,
          password,
        },
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.log(error.response.data);
          // console.log(error.response.status);
          // on pourrait différencier le message d'erreur selon le code d'erreur
        });

      next(action);
      break;
    }

    /* authentification persistante :
    - la première fois qu'on accède au serveur, il nous fournit un cookie avec un
    identifiant de session ("tu es l'utilisateur 1234")
    - quand on se connecte (/login) avec des identifiants valides, on envoie le
    cookie avec l'identifiant de session 1234, le serveur note
    que pour l'utilisateur 1234 il y a maintenant une authentification valide
    - quand on demande au serveur si on est loggué (/isLogged), on envoie notre
    numéro, le serveur vérifie s'il a une session à ce numéro et si ça correspond
    à une authentification valide
    - si je demande à me déconnecter (/logout), le serveur détruit la session 1234
    */

    case CHECK_LOGGED:
      axios({
        method: 'post',
        url: 'http://localhost:8000/isLogged',
        // withCredentials : autorisation d'accéder au cookie
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.logged, response.data.info));
        });

      next(action);
      break;

    case LOG_OUT:
      axios({
        method: 'post',
        url: 'http://localhost:8000/logout',
        // withCredentials : autorisation d'accéder au cookie
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser(response.data.logged, response.data.info));
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
export default userMiddleware;
