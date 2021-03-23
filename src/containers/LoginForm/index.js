import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { changeField, logIn, logOut, setLoadingFalse, setLoadingTrue } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // console.log(`Changement de valeur pour ${name} : ${value}`);
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  setLoadingFalse: () => {
    dispatch(setLoadingFalse());
  },

  setLoadingTrue: () => {
    dispatch(setLoadingTrue());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
