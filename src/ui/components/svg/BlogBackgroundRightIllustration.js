import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="93"
      height="578"
      viewBox="0 0 93 578"
      {...props}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M24.1671 283.334C-39.1819 126.722 44.6953 15.0355 97.9126 0.550781L97.9124 577.837C90.4075 566.37 13.3793 517.309 2.76905 473.235C-14.6163 401.019 63.9764 381.751 24.1671 283.334Z"
        className="outer-path-right"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M33.7059 269.53C-22.2295 110.119 44.0682 46.3177 97.2855 31.833V558.936C89.7806 547.469 42.4708 515.366 26.3391 473.001C-5.89802 388.34 84.9988 415.71 33.7059 269.53Z"
        className="inner-path-right"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="14.226"
          x2="143.99"
          y1="58.66"
          y2="829.258"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop
            offset="1"
            stopColor="#0072FF"
            stopOpacity="0.46"
          ></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="40.099"
          x2="147.32"
          y1="63.205"
          y2="719.803"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop
            offset="1"
            stopColor="#0072FF"
            stopOpacity="0.7"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
