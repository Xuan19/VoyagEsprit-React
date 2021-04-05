import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { GetFormattedDate, slugifyTitle } from 'src/utils';
import { Rating, Card, Image } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import { TravelSmallStyles } from './TravelSmallStyled';

const TravelSmall = ({
  id,
  name,
  price,
  isLiked,
  dates,
  cities,
  averageRating,
  baseline,
  image,
}) => {
  const cssClass = classNames('travel-small', { 'travel-small--favorite': isLiked });
  const handleCLick = () => {
    localStorage.setItem('idTravel', id);
  };

  return (
    <Card>
      <div className="travel-carousel">
        <Carousel showThumbs={false}>
          {image.map((img) => <img src={`http://localhost:8000/assets/images/${img}`} key={img} alt="" />)}
        </Carousel>
      </div>
      <article className={cssClass}>
        <div className="travel-small-content">
          <div className="activity-name-price">
            <div className="activity-name">
              <h2>{name}</h2>
            </div>
            <div className="activity-price">
              <div className="activity-price-prefix">
                <strong>
                  A partir de
            </strong>
              </div>
              <div className="activity-price-amount">
                <strong>
                  <span id="printed-price">{price} €</span>
                </strong>
              </div>
            </div>
          </div>
          <div className="activity-location">
            {cities.map((city) => (
              <strong className="location" key={city.id}> {city.country.countryName} </strong>
            ))}
          </div>
          <div className="activity-baseline">
            <p>{baseline}</p>
          </div>
          <div className="activity-date">
            <strong className="date"> Date : </strong>
            {`du ${GetFormattedDate(dates[0].startAt)} au ${GetFormattedDate(dates[0].endAt)}`}
          </div>
          <div className="activity-duration">
            <strong className="duration">Durée : </strong>
            {`${Math.floor((new Date(dates[0].endAt) - new Date(dates[0].startAt)) / (24 * 3600 * 1000)) + 1} jours`}
          </div>

          <div className="ui-star-rating" role="radiogroup" tabIndex="-1">
            <Rating icon="star" defaultRating={averageRating} maxRating={5} size="huge" disabled />
          </div>
          <Link
            to={`travel/${slugifyTitle(name)}`}
            onClick={handleCLick}
          >
            Voir les détails
          </Link>
        </div>
        <TravelSmallStyles />
      </article>
    </Card>
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
  image: PropTypes.array.isRequired,
  averageRating: PropTypes.number.isRequired,
};

export default TravelSmall;