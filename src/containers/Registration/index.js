import { connect } from 'react-redux';
import Registration from 'src/components/Registration';
import { changeField, handleRegister } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  isRegistered: state.user.isRegistered,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // console.log(`Changement de valeur pour ${name} : ${value}`);
    dispatch(changeField(value, name));
  },
  handleRegister: () => {
    dispatch(handleRegister());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registration);
