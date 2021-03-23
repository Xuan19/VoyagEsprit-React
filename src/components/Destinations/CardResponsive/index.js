// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Image, Rating } from 'semantic-ui-react';
import { slugifyTitle, GetFormattedDate, checkRating } from 'src/utils';

// == Composant
const CardTravel = ({
  name, id, baseline, price, image, dates, sports, department, averageRating, fetchTravelDetails,
}) => {
  const slugTitle = slugifyTitle(name);

  const handleCLick = () => {
    localStorage.setItem('idTravel', id);
    fetchTravelDetails();
  };

  return (
    <Card className="card-total">
      <Image src={`http://api.voyageons-sport.fr/assets/images/${image}`} wrapped ui={false} />
      <Card.Content>
        <div className="home-card-title">{department.region.name}</div>
        <div className="home-card-info">
          <div className="home-card-activity">
            {sports.map((sport) => (
              sport.sport
            ))}
          </div>
          <div className="home-card-price">{price} €</div>
        </div>
        <Card.Meta className="home-card-meta">
          <span className="date">{dates.map((date) => (date.travelLength))} du {dates.map((date) => (GetFormattedDate(date.travel_start)))} au {dates.map((date) => (GetFormattedDate(date.travel_end)))}</span>
        </Card.Meta>
        <Card.Description className="home-card-desciption">
          {baseline}
        </Card.Description>
        <div className="home-card-rating">
          <Rating icon="star" defaultRating={checkRating(averageRating)} maxRating={5} disabled />
        </div>
      </Card.Content>

      <Card.Content extra className="home-card-extra">

        <NavLink
          key={id}
          onClick={handleCLick}
          to={`/destinations/${slugTitle}/`}
        >
          En Savoir Plus
        </NavLink>
      </Card.Content>
    </Card>
  );
};

CardTravel.propTypes = {
  listTravelDetails: PropTypes.arrayOf(
    PropTypes.shape({
      averageRating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      baseline: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      department: PropTypes.objectOf(
        PropTypes.shape({
          region: PropTypes.objectOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
            }),
          ),
        }),
      ),
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          travel_start: PropTypes.string.isRequired,
          travel_end: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      sports: PropTypes.arrayOf(
        PropTypes.shape({
          sport: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ),
  fetchTravelDetails: PropTypes.func.isRequired,
};

// == Export
export default CardTravel;
