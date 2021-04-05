import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import Details from './Details';
import Highlight from './Highlight';

import './travel.scss';

const Travel = ({
  travel, fetchTravel, loading,
}) => {
  useEffect(() => {
    fetchTravel();
  }, []);
  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div className="travel">
          <Highlight {...travel} />
          <Details {...travel} />
        </div>
      )}
    </div>
  );
};

Travel.propTypes = {
  loading: PropTypes.bool.isRequired,
  travel: PropTypes.object.isRequired,
  fetchTravel: PropTypes.func.isRequired,
};

// == Export
export default Travel;
