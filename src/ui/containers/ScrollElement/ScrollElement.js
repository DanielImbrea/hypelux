import React from "react";
import ScrollDownIllustration from "@assets/svg/scrollDown.svg";
import "./ScrollElement.styles.scss";

const ScrollElement = ({ element }) => {
  const onClick = () => {
    const scrolledElement = document.querySelector(element);

    if (scrolledElement) {
      scrolledElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="scroll-element" onClick={onClick}>
      <ScrollDownIllustration />
    </div>
  );
};

export default ScrollElement;
