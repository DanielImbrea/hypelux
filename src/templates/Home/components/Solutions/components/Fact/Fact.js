import React from "react";
import "./Fact.styles.scss";

const Fact = ({ number, name, description }) => {
  return (
    <div className="solutions-fact">
      <div className="solutions-fact__numbers">
        <h3 className="solutions-fact__number">{number}</h3>
        <span className="solutions-fact__label">{name}</span>
      </div>
      <p className="solutions-fact__description">{description}</p>
    </div>
  );
};

export default Fact;
