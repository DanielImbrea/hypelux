import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="776"
      height="698"
      viewBox="0 0 776 698"
      fill="none"
      className={className}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M333.371 578.71C137.377 439.726 23.6829 491.085 -16.3935 578.71L-16.3933 115.127C-22.6274 117.495 11.3283 52.7555 261.469 29.8694C583.23 0.430691 759.567 229.015 759.567 347.025C759.567 550.162 657.969 808.892 333.371 578.71Z"
        className="inner-path"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M312.872 599.864C99.9676 448.888 -23.537 504.678 -67.0713 599.864L-67.0723 100.764C-73.8443 103.336 -36.9576 28.528 234.766 3.66727C584.289 -28.3115 775.842 219.996 775.842 348.188C775.842 568.852 665.477 849.907 312.872 599.864Z"
        className="outer-path"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="693.415"
          x2="-265.102"
          y1="426.771"
          y2="-141.378"
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
          x1="4.925"
          x2="926.897"
          y1="157.847"
          y2="810.867"
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
