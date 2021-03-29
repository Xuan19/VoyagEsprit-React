import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import Travels from '../../containers/Travels';
import './destinations.scss';

const Destinations = () => (
  <main className="destinations">
    <SearchBar />
    <Travels />
  </main>
);

// Home.propTypes = {
// };

export default Destinations;
