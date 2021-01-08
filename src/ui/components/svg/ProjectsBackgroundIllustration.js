import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="819"
      height="586"
      fill="none"
      viewBox="0 0 819 586"
      {...props}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M818.443 309.067c0 152.63-58.33 276.36-430.489 276.36-214.13 0-387.717-123.73-387.717-276.36C.237 91.404 149.372.914 444.45.914c214.13 0 373.993 155.524 373.993 308.153z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="578.916"
          x2="132.436"
          y1="41.087"
          y2="678.619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
