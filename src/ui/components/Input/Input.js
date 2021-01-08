import React from "react";
import classNames from "classnames";

import "./Input.styles.scss";

const Input = ({
  name,
  value,
  onChange,
  type,
  required,
  label,
  className,
  errors,
}) => {
  const errorObj = errors && errors.find(item => item.name === name);

  return (
    <div className={classNames("input", className)}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        className="input__element"
      />
      <span className="input__highlight" />
      <span className="input__bar" />
      <label className="input__label">{label}</label>
      {<div className="error">{errorObj && errorObj.error}</div>}
    </div>
  );
};

export default Input;
