import React from "react";
import classNames from "classnames";

import "./Textarea.styles.scss";

const Textarea = ({
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
    <div className={classNames("textarea", className)}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        className="textarea__element"
      />
      <span className="textarea__highlight" />
      <span className="textarea__bar" />
      <label className="textarea__label">{label}</label>
      {<div className="error">{errorObj && errorObj.error}</div>}
    </div>
  );
};

export default Textarea;
