import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "./SubTitle.styles.scss";

const SubTitle = ({ children, isDoubled = false }) => {
  return (
    <p className="sub-title-container">
      <ScrollAnimation
        animateIn="scaleX"
        className="line"
        animateOnce="true"
      />
      <ScrollAnimation animateIn="textFocusIn" animateOnce={true}>
        <div className="sub-title">{children}</div>
      </ScrollAnimation>
      {isDoubled && (
        <ScrollAnimation
          animateIn="scaleX"
          className="line line--right"
          animateOnce="true"
        />
      )}
    </p>
  );
};

export default SubTitle;
