/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './destinations.scss';
import SearchBar from '../SearchBar';
import CardsTravels from './CardsTravels';
import CardResponsive from './CardResponsive';

const Destinations = ({
  listTravels, fetchTravelDetails, fetchMainTravelsFormInfo
}) => {
  useEffect(() => {
    fetchMainTravelsFormInfo();
  }, []);

  const [region, setRegion] = useState({ region_field: '' });
  const [sport, setSport] = useState({ sport_field: '' });
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);


  let travelList;

  if (sport.sport_field && region.region_field && date1 && date2) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) >= date1 && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (sport.sport_field && region.region_field && date1) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) >= date1);
  }

  else if (sport.sport_field && region.region_field && date2) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (sport.sport_field && date2 && date1) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport.sport_field
      && new Date(travelDetail.dates[0].travel_start) >= date1 && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (region.region_field && date2 && date1) {
    travelList = listTravels.filter((travelDetail) => travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) >= date1 && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (sport.sport_field && region.region_field) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && travelDetail.department.region.name === region.region_field);
  }

  else if (sport.sport_field && date2) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (sport.sport_field && date1) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && new Date(travelDetail.dates[0].travel_start) >= date1);
  }

  else if (region.region_field && date2) {
    travelList = listTravels.filter((travelDetail) => travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (date1 && region.region_field) {
    travelList = listTravels.filter((travelDetail) => travelDetail.department.region.name === region.region_field && new Date(travelDetail.dates[0].travel_start) >= date1);
  }

  else if (date1 && date2) {
    travelList = listTravels.filter((travelDetail) => new Date(travelDetail.dates[0].travel_start) >= date1 && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (sport.sport_field && date1) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && new Date(travelDetail.dates[0].travel_start) >= date1);
  }

  else if (sport.sport_field && date2) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field
      && new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else if (region.region_field) {
    travelList = listTravels.filter((travelDetail) => travelDetail.department.region.name === region.region_field);
  }

  else if (sport.sport_field) {
    travelList = listTravels.filter((travelDetail) => travelDetail.sports[0].sport === sport.sport_field);
  }

  else if (date1) {
    travelList = listTravels.filter((travelDetail) => new Date(travelDetail.dates[0].travel_start) >= date1);
  }

  else if (date2) {
    travelList = listTravels.filter((travelDetail) => new Date(travelDetail.dates[0].travel_start) <= date2);
  }

  else {
    travelList = listTravels;
  }

  return (
    <main className="destination">
      <div>
        <SearchBar
          listTravels={listTravels}
          region={region.region_field}
          setRegion={setRegion}
          setSport={setSport}
          sport={sport.sport_field}
          date1={date1}
          setDate1={setDate1}
          date2={date2}
          setDate2={setDate2}
        />

        <div className="destination-container">

          <h1 className="destination-title">Destinations</h1>
          <div className="items-large-container">
            {travelList.map((listTravelDetail) => (
              <CardsTravels fetchTravelDetails={fetchTravelDetails} key={listTravelDetail.id} {...listTravelDetail} />
            )).reverse()}
          </div>
          <div className="items-large-responsive">
            {travelList.map((listTravelDetail) => (
              <CardResponsive fetchTravelDetails={fetchTravelDetails} key={listTravelDetail.id} {...listTravelDetail} />
            )).reverse()}
          </div>

        </div>
      </div>
    </main>
  );
};

export default Destinations;
