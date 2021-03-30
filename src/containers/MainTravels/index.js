import { connect } from 'react-redux';

import MainTravels from 'src/components/MainTravels';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  mainTravels: state.travels.listMainTravels,

});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainTravels);