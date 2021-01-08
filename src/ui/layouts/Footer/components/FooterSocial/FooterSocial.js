import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import "./FooterSocial.styles.scss";

const FooterSocial = () => {
  return (
    <div className="footer__icons">
      <div className="footer__icon-container footer__icon-container--active">
        <FiFacebook className="footer__icon" />
      </div>
      <div className="footer__icon-container">
        <FiInstagram className="footer__icon" />
      </div>
      <div className="footer__icon-container">
        <FiTwitter className="footer__icon" />
      </div>
    </div>
  );
};

export default FooterSocial;
