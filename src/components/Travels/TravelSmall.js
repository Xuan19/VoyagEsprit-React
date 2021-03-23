import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { GetFormattedDate, slugifyTitle } from 'src/utils';
import { Rating } from 'semantic-ui-react';

const TravelSmall = ({
  id,
  name,
  price,
  isLiked,
  dates,
  cities,
  averageRating,
  baseline,
}) => {
  const cssClass = classNames('travel-small', { 'travel-small--favorite': isLiked });
  const handleCLick = () => {
    localStorage.setItem('idTravel', id);
  };

  return (
    <article className={cssClass}>
      {/* <img
        alt=""
        src={thumbnail}
      /> */}
      <div className="travel-small-content">
        <h2>{name}</h2>
        <p>baseline: {baseline}</p>
        <p>Price: {price}</p>
        <div className="activity-date">
          <strong className="date"> Date : </strong>
          {`du ${GetFormattedDate(dates[0].startAt)} au ${GetFormattedDate(dates[0].endAt)}`}
        </div>
        <div className="activity-location">

          {cities.map((city) => (
            <strong className="location" key={city.id}> {city.name} </strong>
          ))}

        </div>
        <div className="ui-star-rating" role="radiogroup" tabIndex="-1">
          <Rating icon="star" defaultRating={averageRating} maxRating={5} size="huge" disabled />
        </div>
        <Link
          to={`travel/${slugifyTitle}`}
          onClick={handleCLick}
        >
          Voir les détails
        </Link>
      </div>

    </article>
  );
};

TravelSmall.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  baseline: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  dates: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  averageRating: PropTypes.number.isRequired
};

export default TravelSmall;