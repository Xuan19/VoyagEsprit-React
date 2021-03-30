import { connect } from 'react-redux';
import { handleFilter, changeField, changeDate, setLoadingTrue } from '../../actions/travels';
import SearchBar from '../../components/SearchBar';

const mapStateToProps = (state) => ({
    // on a combiné plusieurs reducers : on doit ouvrir le tiroir "recipes"
    // pour pouvoir accéder à loading
    listDestinations: state.travels.listDestinations,
    listCategories: state.travels.listCategories,
    // listStartCities: state.travels.listStartCities,
    destination: state.travels.destination,
    category: state.travels.category,
    startDate: state.travels.startDate,
    loading: state.travels.loading,
    // startCity: state.travels.startCity,

});

const mapDispatchToProps = (dispatch) => ({
    // nom de la prop à remplir: callback qui contient un appel à dispatch
    changeField: (value, name) => {
        dispatch(changeField(value, name));
    },
    changeDate: (startDate) => {
        dispatch(changeDate(startDate));
    },
    handleFilter: () => {
        dispatch(handleFilter());
    },
    setLoadingTrue: () => {
        dispatch(setLoadingTrue());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);