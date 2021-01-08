import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Blockquote.styles.scss";

const Blockquote = ({ children, ...rest }) => {
  return (
    <div {...rest} className="blockquote">
      <FaQuoteLeft />
      {children}
    </div>
  );
};

export default Blockquote;
