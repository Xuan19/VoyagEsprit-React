import React from 'react';
// import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import Travels from '../../containers/Travels';
import './destinations.scss';

const Destinations = ({ loading }) => (
  <main className="destinations">
    {loading && <Loader />}
    {!loading && (
      <div className="destinations-container">
        <SearchBar />
        <Travels />
      </div>
    )}
  </main>
);

Destinations.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Destinations;
