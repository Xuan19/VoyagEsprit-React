import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import SearchBar from '../../containers/SearchBar';
import MainTravels from '../../containers/MainTravels';
import './home.scss';

const Home = () => {
  return (
    <main className="home">
      <SearchBar />
      <MainTravels />
    </main>
  );
};

export default Home;
