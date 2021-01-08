import React from "react";

import "./Checkbox.styles.scss";

const Checkbox = ({
  id,
  name,
  placeholder,
  label,
  required,
  type,
  onChange,
  errors,
  value,
}) => {
  const errorObj = errors && errors.find(item => item.name === name);

  return (
    <div className="checkbox-wrapper">
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input
            className="checkbox"
            type="checkbox"
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          <span class="checkbox-custom rectangular" />
        </label>

        <label className="checkbox-text" htmlFor={id}>
          {label}
        </label>
      </div>
      {<div className="error">{errorObj && errorObj.error}</div>}
    </div>
  );
};

export default Checkbox;
