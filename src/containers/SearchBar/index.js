import { connect } from 'react-redux';
import { handleFilter, changeField,changeDate } from '../../actions/travels';
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
    // startCity: state.travels.startCity,

});

const mapDispatchToProps = (dispatch) => ({
    // nom de la prop à remplir: callback qui contient un appel à dispatch
    changeField: (value, label) => {
        dispatch(changeField(value, label));
    },
    changeDate: (startDate) => {
        dispatch(changeDate(startDate));
    },
    handleFilter: () => {
        dispatch(handleFilter());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);