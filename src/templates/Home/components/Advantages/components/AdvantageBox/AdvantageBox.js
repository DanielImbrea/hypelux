import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./AdvantageBox.styles.scss";

const AdvantageBox = ({ Icon, title, description, index }) => {
  return (
    <ScrollAnimation
      className="advantage-box"
      animateIn="fadeIn"
      animateOnce={true}
      delay={(index + 1) * 100}
    >
      <div className="advantage-box__icon">
        <Icon />
      </div>
      <span className="advantage-box__title">{title}</span>
      <p className="advantage-box__description">{description}</p>
    </ScrollAnimation>
  );
};

export default AdvantageBox;
