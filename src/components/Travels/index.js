import React from 'react';
import PropTypes from 'prop-types';
import TravelSmall from 'src/containers/TravelSmall';

const Travels = ({ travels }) => (
  <main className="travels">
    <div className="travels-small">
      {travels.map((travel) => (
        <TravelSmall key={travel.id} {...travel} />
      ))}
    </div>
  </main>
);

Travels.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Travels;
