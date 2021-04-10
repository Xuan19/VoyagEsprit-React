import { connect } from 'react-redux';

import Profile from 'src/components/Profile';

import { fetchUserInfo, handleProfile, changeField, changeDate } from 'src/actions/user';
import { setLoadingTrue } from 'src/actions/travels';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  isLogged: state.user.isLogged,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  email: state.user.email,
  password: state.user.password,
  // image: state.user.image,
  birthday: state.user.birthday,
  phoneNumber: state.user.phoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo());
  },
  handleProfile: () => {
    dispatch(handleProfile());
  },
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  changeDate: (date) => {
    dispatch(changeDate(date));
  },
  setLoadingTrue: () => (
    dispatch(setLoadingTrue())
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
