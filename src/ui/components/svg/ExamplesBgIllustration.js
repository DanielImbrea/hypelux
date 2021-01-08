import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="1097"
      fill="none"
      viewBox="0 0 1440 1097"
      preserveAspectRatio="none"
      className={className}
    >
      <rect
        width="1440"
        height="1096.25"
        y="0.342"
        fill="#3EB5FF"
        fillOpacity="0.2"
        rx="85"
      ></rect>
      <rect
        width="1440"
        height="1055.95"
        y="22.96"
        fill="#3EB5FF"
        rx="85"
      ></rect>
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.6"
        d="M1075.26 102.301c-52.07-109.604-120.608-77.932-154.94-26.53l-7.675 113.042c19.286-17.131 42.127-31.749 59.415-5.394 46.24 70.502-89.615 450.204 11.207 558.651 109.103 117.353 281.073 7.184 378.793 98.044 96.73 89.939 78 110.083 97.2 166.286 42.26 5.1 134.73 72.12 138.57 15.54.62-93.438-67.73-343.133-126.74-418.106-73.76-93.716-222.32 45.134-323.17-.821-100.85-45.955-7.56-363.706-72.66-500.712z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="915.691"
          x2="1542.46"
          y1="143.951"
          y2="983.867"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C6FF"></stop>
          <stop offset="1" stopColor="#0072FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
