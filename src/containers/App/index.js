import { connect } from 'react-redux';

import App from '../../components/App';

import { fetchMainTravelsFormInfo, fetchFormInfo } from '../../actions/travels';
import { checkLogged } from '../../actions/user';

const mapStateToProps = (state) => ({
  // on a combiné plusieurs reducers : on doit ouvrir le tiroir "recipes"
  // pour pouvoir accéder à loading
  loading: state.travels.loading,
  listDestinations: state.travels.listDestinations,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchMainTravelsFormInfo: () => {
    dispatch(fetchMainTravelsFormInfo());
  },

  fetchFormInfo: () => {
    dispatch(fetchFormInfo());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);