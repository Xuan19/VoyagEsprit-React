/* eslint-disable camelcase */
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './highlight.scss';
import { Rating, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { GetFormattedDate } from 'src/utils';

const Highlight = ({
  id,
  name,
  price,
  cities,
  dates,
  image,
  averageRating,
}) => {
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

  return (

    <div className="main-zone-secondary-div">

      <div className="top-left-col">
        <div className="activity-baseline">
          {name}
        </div>
        <div className="travel-carousel">
          <Carousel>
            {image.map((img) => <img src={`http://localhost:8001/assets/images/${img}`} alt="" />)}
          </Carousel>
        </div>
      </div>
      <div className="top-right-col">
        <div className="mains-infos-zone">
          <div className="activity-infos-details">
            <div className="ui-star-rating" role="radiogroup" tabIndex="-1">
              <Rating icon="star" defaultRating={averageRating} maxRating={5} size="huge" disabled />
            </div>
            <div className="activity-price">
              <div className="activity-price-prefix">
                <strong>
                  A partir de
                </strong>
              </div>
              <div className="activity-prices ">
                <div className="activity-price-amount">
                  <strong>
                    <span id="printed-price">{price} €</span>
                  </strong>
                </div>
                <div className="activity-price-based-on-nb-person">
                  / personne
                </div>
              </div>
            </div>

            <div className="activity-location">

              {cities.map((city) => (
                <strong className="location" key={city.id}> {city.country.countryName} </strong>
              ))}

            </div>

            <div className="activity-date">
              <strong className="date"> Date : </strong>
              {`du ${GetFormattedDate(dates[0].startAt)} au ${GetFormattedDate(dates[0].endAt)}`}
            </div>

            <div className="activity-duration">
              <strong className="duration">Durée : </strong>
              {`${Math.floor((new Date(dates[0].endAt) - new Date(dates[0].startAt)) / (24 * 3600 * 1000)) + 1} jours`}
            </div>
            {(!isFavori && !list.includes(id)) && (
              <Button icon onClick={handleFavori}>
                <Icon name="heart outline" />
              </Button>
            )}
            {(isFavori || list.includes(id)) && (
              <Button icon onClick={handleFavori}>
                <Icon name="heart" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Highlight.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  averageRating: PropTypes.number.isRequired,
};
export default Highlight;
