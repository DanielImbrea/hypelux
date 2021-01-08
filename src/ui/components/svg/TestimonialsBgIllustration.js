import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="740"
      height="659"
      viewBox="0 0 740 659"
      className={className}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.1"
        d="M425.665 115.075c188.139 133.414 297.278 84.114 335.748 0V560.08c5.984-2.273-26.611 59.872-266.727 81.841C185.82 670.18 16.549 450.756 16.549 337.475c0-194.996 97.527-443.357 409.116-222.4z"
        className="inner-path"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillOpacity="0.1"
        d="M445.348 94.774c204.372 144.926 322.927 91.372 364.717 0l-.001 483.402c6.501-2.469-28.906 65.038-289.741 88.902C184.807 697.776.931 459.419.931 336.364c0-211.821 105.942-481.612 444.417-241.59z"
        className="outer-path"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="80.049"
          x2="1000.15"
          y1="260.925"
          y2="806.306"
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
          x1="69.911"
          x2="1069.41"
          y1="253.209"
          y2="845.647"
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
