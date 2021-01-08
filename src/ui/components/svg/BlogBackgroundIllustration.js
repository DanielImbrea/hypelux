import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="208"
      height="661"
      viewBox="0 0 208 661"
      {...props}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M155.247 211.55C295.917 67.718 60.6718 17.5053 -2.70326 0.255859L-2.70338 660.285C6.23399 646.629 78.515 597.557 105.815 550.983C139.941 492.766 28.8449 340.793 155.247 211.55Z"
        className="inner-path"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M115.702 228.027C256.372 84.1954 61.4183 27.31 -1.9568 10.0605V637.774C6.98058 624.119 55.2311 582.01 82.5314 535.437C116.657 477.22 -10.7001 357.27 115.702 228.027Z"
        className="outer-path"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="126.856"
          x2="13.245"
          y1="50.944"
          y2="725.615"
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
          x1="104.205"
          x2="10.331"
          y1="54.924"
          y2="629.786"
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
