import React from "react";
import "./Box.styles.scss";

const Box = ({ title, children }) => {
  return (
    <div className="sidebar-box">
      <div className="sidebar-box__title">
        <span>{title}</span>
        <div className="line"></div>
      </div>
      <div className="sidebar-box__content">{children}</div>
    </div>
  );
};

export default Box;
