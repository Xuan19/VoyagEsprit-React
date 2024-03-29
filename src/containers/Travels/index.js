import { connect } from 'react-redux';

import Travels from 'src/components/Travels';
import { setLoadingTrue } from '../../actions/travels';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  travels: state.travels.listTravels,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  setLoadingTrue: () => {
    dispatch(setLoadingTrue());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Travels);
