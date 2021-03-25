import React from 'react';
import PropTypes from 'prop-types';
import TravelSmall from './TravelSmall';
import './travels.scss';

const Travels = ({ mainTravels }) => {
  // console.log(mainTravels);
  return (
    <main className="travels">
      <div className="travels-small">
        {mainTravels.map((travel) => (
          <TravelSmall key={travel.id} {...travel} />
        ))}
      </div>
    </main>
  );
};

Travels.propTypes = {
  mainTravels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Travels;
