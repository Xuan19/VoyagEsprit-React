import { connect } from 'react-redux';
import Travel from 'src/components/Travel';
import { fetchTravel } from '../../actions/travel';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  travel: state.travel.travel,
  loading: state.travel.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchTravel: () => {
    dispatch(fetchTravel());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Travel);
