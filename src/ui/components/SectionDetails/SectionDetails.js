import React from "react";
import classNames from "classnames";
import SectionTitle from "@components/SectionTitle";
import SubTitle from "@components/SubTitle";
import ScrollAnimation from "react-animate-on-scroll";

import "./SectionDetails.styles.scss";

const SectionDetails = ({
  subTitle,
  title,
  highlightedTitle,
  description,
  isCentered,
  isWhite = false,
}) => {
  return (
    <div
      className={classNames("section-details", {
        "section-details--centered": isCentered,
        "section-details--white": isWhite,
      })}
    >
      {subTitle && (
        <div className="section-details__sub-title">
          <SubTitle isDoubled={isCentered}>{subTitle}</SubTitle>
        </div>
      )}
      <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
        <SectionTitle
          className="section-details__title"
          title={title}
          highlightedTitle={highlightedTitle}
        />
      </ScrollAnimation>
      {description && (
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={true}
          delay={300}
        >
          <p className="section-details__description description">
            {description}
          </p>
        </ScrollAnimation>
      )}
    </div>
  );
};

export default SectionDetails;
