import { connect } from 'react-redux';

import Favoris from 'src/components/Favoris';
import { setLoadingTrue } from '../../actions/travels';
import { fetchTravel } from '../../actions/travel';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  travels: state.travels.listTravels,
  mainTravels: state.travels.listMainTravels,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchTravel: () => {
    dispatch(fetchTravel());
  },
  setLoadingTrue: () => {
    dispatch(setLoadingTrue());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favoris);
