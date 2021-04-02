/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import Loader from 'src/components/Loader';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ButtonStyled,
  CategorySelect,
  DestinationSelect,
  DatePickerWrapperStyles,
} from './SearchBarStyled';

registerLocale('fr', fr);

const SearchBar = ({
  listDestinations,
  listCategories,
  changeField,
  startDate,
  handleFilter,
  changeDate,
  category,
  destination,
  setLoadingTrue,
}) => {
  const handleChange = (value, action) => {
    switch (action.action) {
      case 'select-option':
        changeField(value.label, action.name);
        break;
      case 'clear':
        changeField('', action.name);
        break;
      default:
    }
  };
  const handleDateChange = (evt) => {
    changeDate(evt);
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmit(true);
    handleFilter();
  };

  if (isSubmit) {
    setLoadingTrue();
  }

  const dataDestination = listDestinations.map((item) => (
    {
      value: 'destination',
      label: item.countryName,
    }
  ));

  const dataCategory = listCategories.map((item) => (
    {
      value: 'category',
      label: item.name,
    }
  ));

  const listCountries = [
    ...new Map(dataDestination.map((item) => [item.label, item])).values(),
  ];

  return (
    <div className="form">
      {/* {loading && <Loader />} */}
      {isSubmit && <Redirect to="/destinations" />}
      <form action="" className="filter-form" onSubmit={handleSubmit} target="">
        <div className="filter-form-input-category">
          <CategorySelect
            options={dataCategory}
            onChange={handleChange}
            isClearable
            name="category"
            inputId="category_field"
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder={category ? `${category}` : 'Type de voyage'}
          />
        </div>
        <div className="filter-form-input-destination">
          <DestinationSelect
            name="destination"
            inputId="destination_field"
            options={listCountries}
            inputValue=""
            onChange={handleChange}
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder={destination ? `${destination}` : 'Destination'}
          />
        </div>
        <div className="filter-form-input-date">
          <DatePicker
            name="startDate"
            selected={startDate}
            onChange={handleDateChange}
            // className="react-datepicker-wrapper"
            wrapperClassName="datePicker"
            dateFormat="d MMMM,yyyy"
            minDate={new Date()}
            todayButton="Today"
            showYearDropdown
            yearDropdownItemNumber={3}
            placeholderText="Départ"
            locale="fr"
          />
          <DatePickerWrapperStyles />
        </div>
        <div className="filter-form-button">
          <ButtonStyled
            type="submit"
            value="Rechercher"
          />
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  listDestinations: PropTypes.array.isRequired,
  listCategories: PropTypes.array.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  changeField: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  destination: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setLoadingTrue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
