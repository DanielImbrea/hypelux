import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1363"
      fill="none"
      viewBox="0 0 1440 1363"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.03"
        d="M.201 41.836C353.153 133.822 998.841 78.146 1439.8.685V1273.97c-371.29 185.91-1114.439 35.5-1439.599-62.94V41.836z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="68.258"
          x2="1129.05"
          y1="69.714"
          y2="1518.16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF" stopOpacity="0.28"></stop>
          <stop offset="1" stopColor="#00C6FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
