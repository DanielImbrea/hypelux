import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="700"
      viewBox="0 0 128 700"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M45.5667 225.221C-103.569 72.7336 156.238 18.4613 223.427 0.173828L223.427 699.921C213.951 685.444 139.114 612.917 110.171 563.54C73.9922 501.82 179.575 362.241 45.5667 225.221Z"
        className="outer-path"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M68.459 229.239C-80.677 76.752 155.445 28.855 222.635 10.567v665.488c-9.475-14.478-60.629-59.12-89.572-108.496-36.179-61.721 69.404-201.3-64.604-338.32z"
        className="inner-path"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="89.13"
          x2="203.952"
          y1="51.21"
          y2="733.068"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop
            offset="1"
            stopColor="#0072FF"
            stopOpacity="0.76"
          ></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="112.023"
          x2="226.844"
          y1="55.231"
          y2="737.089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop
            offset="1"
            stopColor="#0072FF"
            stopOpacity="0.46"
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
