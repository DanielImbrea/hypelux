import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 700 1051"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.03"
        d="M-88.886 263.001c-79.531-44.629-52.295-94.404-12.004-117.529h85.15c-13.828 13.588-25.95 29.971-7.07 44.275C27.7 228.011 319.32 145.472 395.5 226.59c82.438 87.779-8.922 211.115 54.231 289.014 62.512 77.108 78.57 64.084 119.735 81.346 1.669 31.946 47.216 104.689 4.595 104.689-70.09-4.291-253.834-68.254-307.045-116.316-66.514-60.077 45.16-164.399 15.837-242.356-29.324-77.958-272.326-24.181-371.74-79.966z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M626.827 569.057C743.644 91.952 250.246-1.707-11.056 11.102v656.326c163.954 166.003 521.066 378.732 637.883-98.371z"
        className="inner-path"
      ></path>
      <path
        fill="url(#paint2_linear)"
        fillOpacity="0.1"
        d="M645.516 583.307C765.484 85.507 258.774-12.215-9.577 1.149v684.796C158.8 859.149 525.547 1081.11 645.516 583.307z"
        className="outer-path"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-49.533"
          x2="548.334"
          y1="145.472"
          y2="658.189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop offset="1" stopColor="#0072FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="464.954"
          x2="-66.286"
          y1="817.239"
          y2="-59.626"
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
          id="paint2_linear"
          x1="479.276"
          x2="-79.032"
          y1="842.255"
          y2="-64.807"
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
