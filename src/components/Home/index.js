import React from 'react';
// import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import Travels from '../../containers/Travels';
import './home.scss';

const Home = () => (
  <main className="home">
    <SearchBar />
    <Travels />
  </main>
);

// Home.propTypes = {
// };

export default Home;
