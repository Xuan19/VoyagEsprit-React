import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { slugifyTitle } from '../../utils';

const TravelSmall = ({
  name,
  price,
  isLiked,
}) => {
  const cssClass = classNames('travel-small', { 'travel-small--favorite': isLiked });

  return (
    <article className={cssClass}>
      {/* <img
        alt=""
        src={thumbnail}
      /> */}
      <div className="travel-small-content">
        <h2>{ name }</h2>
        <p>Price: {price}</p>
        <Link
          to={`/travel/${slugifyTitle(name)}`}
        >
          Voir les détails
        </Link>
      </div>

    </article>
  );
};

TravelSmall.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
};

export default TravelSmall;