import React from 'react';
import PropTypes from 'prop-types';
import TravelSmall from './TravelSmall';

const MainTravels = ({ mainTravels }) => (
  <main className="travels">
    <div className="travels-small">
      {mainTravels.map((travel) => (
        <TravelSmall key={travel.id} {...travel} />
      ))}
    </div>
  </main>
);

MainTravels.propTypes = {
  mainTravels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MainTravels;