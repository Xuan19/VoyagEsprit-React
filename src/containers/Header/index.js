import { connect } from 'react-redux';
import { logOut } from '../../actions/user';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  token: state.user.token,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  logOut: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);