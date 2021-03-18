// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  label,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <div className="profile-data">
      <div className="profile-data-label">
        <label
          htmlFor={inputId}
          className="form-fied-label">
          {label}
          <span className="required-indicator">*</span>
        </label>
      </div>
      <div className="profile-data-input">
        <input
          onChange={handleChange}
          type={type}
          name={name}
          value={value}
          required="required"
          id={inputId}
          aria-required="true"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  placeholder: '',
};

// == Export
export default Field;
