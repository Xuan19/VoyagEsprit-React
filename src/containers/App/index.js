import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchTravels } from '../../actions/travels';
import { checkLogged } from '../../actions/user';

const mapStateToProps = (state) => ({
  // on a combiné plusieurs reducers : on doit ouvrir le tiroir "recipes"
  // pour pouvoir accéder à loading
  loading: state.travels.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchTravels: () => {
    dispatch(fetchTravels());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);