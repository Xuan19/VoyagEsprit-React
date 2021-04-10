import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Details from './Details';
import Highlight from './Highlight';
// import Loader from 'src/components/Loader';
import './travel.scss';

const Travel = ({
  travel,
}) => (
  <div>
    {/* {loading && <Loader />} */}
    <div className="travel">
      <Highlight {...travel} />
      <Details {...travel} />
    </div>
  </div>
);
Travel.propTypes = {
  loading: PropTypes.bool.isRequired,
  travel: PropTypes.object.isRequired,
  fetchTravel: PropTypes.func.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
};

// == Export
export default Travel;
