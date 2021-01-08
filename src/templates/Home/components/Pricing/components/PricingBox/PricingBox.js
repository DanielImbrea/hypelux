import React from "react";
import classNames from "classnames";
import ScrollAnimation from "react-animate-on-scroll";

import Button from "@components/Button";
import SecondSvg from "../SecondSvg";
import CheckSvg from "../CheckSvg";

import "./PricingBox.styles.scss";

const PricingBox = ({ title, price, items = [], isMain }) => {
  return (
    <ScrollAnimation
      scrollableParentSelector=".pricing__boxes"
      animateIn="fadeIn"
      animateOnce={true}
      delay={200}
      className={classNames("pricing-box", {
        "pricing-box--main": isMain,
      })}
    >
      <div className="pricing-box__title">{title}</div>
      <div className="pricing-box__price">{price}</div>
      <div className="pricing-box__items">
        {items.map(item => {
          return (
            <div className="pricing-box__item">
              <div className="pricing-box__item__illustration">
                {item.isActive ? <CheckSvg /> : <SecondSvg />}
              </div>
              <div className="pricing-box__item__text">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
      <Button>Check our services</Button>
    </ScrollAnimation>
  );
};

export default PricingBox;
