import { connect } from 'react-redux';
import TravelSmall from 'src/components/TravelSmall';
import { setLoadingTrue } from '../../actions/travels';
import { fetchTravel } from '../../actions/travel';

const mapStateToProps = (state) => ({

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
)(TravelSmall);
