import { connect } from 'react-redux';

import Favoris from 'src/components/Favoris';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  travels: state.travels.listTravels,
  mainTravels: state.travels.listMainTravels,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favoris);
