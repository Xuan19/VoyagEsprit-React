import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import Travels from '../../containers/Travels';

const Home = () => (
  <main className="Home">
    <SearchBar />
    <Travels />
  </main>
);

// Home.propTypes = {
// };

export default Home;
