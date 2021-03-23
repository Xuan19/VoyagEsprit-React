import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';

import { slugifyTitle, GetFormattedDate, checkRating } from 'src/utils';

const Destinations = ({
  name, id, baseline, image, price, department, dates, sports, averageRating, fetchTravelDetails
}) => {
  const slugTitle = slugifyTitle(name);

  const handleCLick = () => {
    localStorage.setItem('idTravel', id);
    fetchTravelDetails();
  };

  return (
    <article className="items-large-cards">
      <img className="items-large-cards-img" alt="tiny" src={`http://api.voyageons-sport.fr/assets/images/${image}`} />
      <div className="items-large-cards-content">
        <h2 className="items-large-cards-header" as="abc">{department.region.name}</h2>
        <div className="items-large-cards-sportprice">
          <p>
            {sports.map((sport) => (
              sport.sport
            ))}
          </p>
          <p>{price} €</p>
        </div>
        <p className="items-large-cards-meta">{baseline}</p>
        <p className="items-large-cards-extra">{dates.map((date) => (date.travelLength))} du {dates.map((date) => (GetFormattedDate(date.travel_start)))} au {dates.map((date) => (GetFormattedDate(date.travel_end)))}</p>
      </div>
      <div className="items-large-cards-more">
        <div className="home-card-rating">
          <Rating icon="star" defaultRating={checkRating(averageRating)} maxRating={5} disabled />
        </div>
        <NavLink
          key={id}
          onClick={handleCLick}
          to={`/destinations/${slugTitle}/`}
        >
          En Savoir Plus
        </NavLink>
      </div>
    </article>
  );
};

export default Destinations;
