import React from 'react';
import PropTypes from 'prop-types';

import TravelSmall from 'src/containers/Home/TravelSmall';
import './home.scss';

const Home = ({ travels }) => (
  <main className="home">
    <div className="travels-small">
      {travels.map((travel) => (
        <TravelSmall key={travel.id} {...travel} />
      ))}
    </div>
  </main>
);

Home.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
