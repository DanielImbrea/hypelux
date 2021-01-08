import React from "react";
import "./FooterBox.styles.scss";

const FooterBox = ({ title, children }) => {
  return (
    <div className="footer-box">
      <div className="footer-box__title">{title}</div>
      <div className="footer-box__items">{children}</div>
    </div>
  );
};

export default FooterBox;
