import axios from 'axios';
import api from 'src/api';
import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  HANDLE_REGISTER,
  saveUser,
  saveRegister,
} from 'src/actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/login_check',
        data: {
          username: email,
          password,
        },
      })
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUser(response.data.token));
          localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          // console.log(error.response.data);
        });

      next(action);
      break;
    }
    case HANDLE_REGISTER: {
      const {
        email,
        password,
        firstName,
        lastName,
      } = store.getState().user;
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/v1/register',
        // withCredentials: true,
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveRegister(response.data));
          //localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          // console.log(error.response.data);
        });

      next(action);
      break;
    }

    case CHECK_LOGGED:
      api.get('http://localhost:8000/api/v1/travels')
        .then((response) => {
          if (localStorage.getItem('token')) {
            store.dispatch(saveUser(response.data));
          }
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    // case LOG_OUT:
    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:8000/logout',
    //     // withCredentials : autorisation d'accéder au cookie
    //     withCredentials: true,
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       store.dispatch(saveUser(response.data.logged, response.data.info));
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });

    //   next(action);
    //   break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
