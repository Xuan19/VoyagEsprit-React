import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import { GetFormattedDate, slugifyTitle } from 'src/utils';
import { Rating, Card, Icon } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import { TravelSmallStyles, ButtonStyled } from './TravelSmallStyled';

const TravelSmall = ({
  id,
  name,
  price,
  dates,
  cities,
  averageRating,
  baseline,
  image,
  fetchTravel,
  setLoadingTrue,
}) => {
  // const cssClass = classNames('travel-small', { 'travel-small--favorite': isLiked });
  const handleCLick = () => {
    localStorage.setItem('idTravel', id);
    fetchTravel();
    setLoadingTrue();
  };
  const [isFavori, setIsFavori] = useState(false);

  const handleFavori = () => {
    const listFavoris = localStorage.getItem('listFavoriId') ? localStorage.getItem('listFavoriId').split(',').map(Number) : [];
    if (!isFavori && !listFavoris.includes(id)) {
      localStorage.setItem('listFavoriId', [...listFavoris, id]);
    }
    if (isFavori && listFavoris.includes(id)) {
      localStorage.setItem('listFavoriId', [listFavoris.filter((item) => item !== id)]);
    }
    setIsFavori(!isFavori);
  };
  const list = localStorage.getItem('listFavoriId') ? localStorage.getItem('listFavoriId').split(',').map(Number) : [];
  // console.log(list);

  return (
    <Card>
      <div className="travel-carousel">
        <Carousel showThumbs={false}>
          {image.map((img) => <img src={`http://localhost:8000/assets/images/${img}`} key={img} alt="" />)}
        </Carousel>
      </div>
      <article className="travel-small">
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
      <div className="favori-button">
        {(!isFavori && !list.includes(id)) && (
          <ButtonStyled icon onClick={handleFavori}>
            <Icon name="heart outline" />
          </ButtonStyled>
        )}
        {(isFavori || list.includes(id)) && (
          <ButtonStyled icon onClick={handleFavori}>
            <Icon name="heart" />
          </ButtonStyled>
        )}
      </div>
    </Card>
  );
};

TravelSmall.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  baseline: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dates: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  image: PropTypes.array.isRequired,
  averageRating: PropTypes.number.isRequired,
  fetchTravel: PropTypes.func.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
};

export default TravelSmall;