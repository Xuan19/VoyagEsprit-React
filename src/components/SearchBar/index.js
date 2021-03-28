/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/esm/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { GetFormattedDate } from 'src/utils';
import { ButtonStyled, CategorySelect, DestinationSelect } from '../SearchBar/SearchBarStyled';

registerLocale('fr', fr);

const SearchBar = ({
  listDestinations,
  listCategories,
  changeField,
  startDate,
  handleFilter,
  changeDate,
}) => {
  const handleChange = (value, { action }) => {
    // console.log(value);
    // console.log(action);
    switch (action) {
      case 'input-change':
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
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFilter();
  };

  const dataDestination = listDestinations.map((destination) => (
    {
      value: 'destination',
      label: destination.countryName,
    }
  ));

  const dataCategory = listCategories.map((category) => (
    {
      value: 'category',
      label: category.name,
    }
  ));

  // console.log(dataCategory);

  const listCountries = [
    ...new Map(dataDestination.map((item) => [item.label, item])).values(),
  ];

  // console.log(listCountries);

  return (
    <form action="" className="filter-form" onSubmit={handleSubmit}>
      <div className="filter-form-input-category">
        <CategorySelect
          options={dataCategory}
          onChange={handleChange}
          isClearable
          name="category"
          inputId="category_field"
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Type de voyage"
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
          placeholder="Destination"
        />
      </div>
      <div className="filter-form-input-date">
        <DatePicker
          name="startDate"
          selected={startDate}
          onChange={handleDateChange}
          // className="filter-input-content-datepicker"
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
      </div>
      <div className="filter-form-button">
        <ButtonStyled
          type="submit"
          className="form-button"
        >
          Rechercher
        </ButtonStyled>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  listDestinations: PropTypes.array.isRequired,
  listCategories: PropTypes.array.isRequired,
  startDate: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
};

export default SearchBar;
