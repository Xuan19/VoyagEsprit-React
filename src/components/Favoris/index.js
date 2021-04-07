import React from 'react';
import PropTypes from 'prop-types';
import TravelSmall from '../TravelSmall';

const Favoris = ({ travels, mainTravels }) => {
  const travelsList = mainTravels.concat(travels);
  const listFavoriId = localStorage.getItem('listFavoriId') ? localStorage.getItem('listFavoriId').split(',').map(Number) : [];
  const listFavoris = [];
  for (let index = 0; index < listFavoriId.length; index++) {
    for (let i = 0; i < travelsList.length; i++) {
      if (travelsList[i].id === listFavoriId[index]) {
        listFavoris.push(travelsList[i]);
      }
    }
  }
  return (
    <main className="travels">
      <div className="travels-small">
        {listFavoris.map((travel) => (
          <TravelSmall key={travel.id} {...travel} />
        ))}
      </div>
    </main>
  );
};

Favoris.propTypes = {
  travels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  mainTravels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Favoris;
