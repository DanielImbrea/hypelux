import React from "react";
import classNames from "classnames";

import "./SectionTitle.styles.scss";

const SectionTitle = ({
  title,
  highlightedTitle,
  className,
  hasBr = true,
}) => {
  return (
    <h2 className={classNames("section-title title-2", className)}>
      {title} {hasBr && <br />}
      <span>{highlightedTitle}</span>
    </h2>
  );
};

export default SectionTitle;
