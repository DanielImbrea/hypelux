import React from "react";
import classNames from "classnames";

import "./Button.styles.scss";

const Button = ({
  children,
  className,
  hasOutline,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "button",
        {
          "button--outline": hasOutline,
        },
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
