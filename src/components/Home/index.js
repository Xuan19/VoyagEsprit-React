import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import MainTravels from '../../containers/MainTravels';
import './home.scss';

const Home = () => (
  <main className="home">
    <SearchBar />
    <MainTravels />
  </main>
);

// Home.propTypes = {
// };

export default Home;
