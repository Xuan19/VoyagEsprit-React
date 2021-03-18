import axios from 'axios';
import api from 'src/api';
import {
  LOG_IN,
  CHECK_LOGGED,
  HANDLE_REGISTER,
  saveUser,
  saveRegister,
  FETCH_USER_INFO,
  saveUserInfo,
  HANDLE_PROFILE,
  saveProfile,
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
          store.dispatch(saveUser(
            response.data.token,
            response.data.firstName,
            response.data.lastName,
          ));
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
        url: 'http://localhost:8000/api/v1/public/register',
        // withCredentials: true,
        data: {
          email,
          password,
          firstName,
          lastName,
        },
      })
        .then((response) => {
          // console.log(response);
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
      api.get('http://localhost:8000/api/v1/public/travels')
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

    case FETCH_USER_INFO: {
      api({
        method: 'get',
        url: 'http://localhost:8000/api/v1/profile',
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveUserInfo(
            response.data.birthday,
            response.data.email,
            response.data.firstName,
            // response.data.image,
            response.data.lastName,
            response.data.phoneNumber,
          ));
        })
        .catch((error) => {
          console.warn(error);
          document.location.reload();
          // store.dispatch(changeFieldLoading(false, 'loading'));
        })
        .finally(() => {
          // document.location.reload();
        });

      next(action);
      break;
    }

    case HANDLE_PROFILE: {
      const {
        email,
        firstName,
        lastName,
        birthday,
        phoneNumber,
      } = store.getState().user;
      api({
        method: 'post',
        url: 'http://localhost:8000/api/v1/profile',
        // headers: {
        //   'Content-Type': 'application/JSON',
        // },
        // withCredentials: true,
        data: {
          email,
          firstName,
          lastName,
          birthday,
          phoneNumber,
        },
      })
        .then((response) => {
          console.log(response);
          store.dispatch(saveProfile(response.data));
          //localStorage.setItem('token', response.data.token);
        })
        .catch((error) => {
          // console.log(error.response.data);
        });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
