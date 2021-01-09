import React from "react";

function Icon({ className, image }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1221.816"
      height="892.338"
      viewBox="0 0 1221.816 892.338"
      className={className}
    >
      <defs>
        <pattern
          id="pattern"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 450 281"
        >
          <image width="450" height="281" xlinkHref={image}></image>
        </pattern>
        <linearGradient
          id="linear-gradient"
          x1="0.089"
          x2="1.007"
          y2="1.083"
          gradientUnits="objectBoundingBox"
        >
          <stop
            offset="0.002"
            stopColor="#00c6ff"
            stopOpacity="0.2"
          ></stop>
          <stop
            offset="0.917"
            stopColor="#0072ff"
            stopOpacity="0.216"
          ></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0.081"
          x2="1.041"
          y2="1.033"
          gradientUnits="objectBoundingBox"
        >
          <stop
            offset="0"
            stopColor="#00c6ff"
            stopOpacity="0.671"
          ></stop>
          <stop
            offset="0.002"
            stopColor="#00c6ff"
            stopOpacity="0.941"
          ></stop>
          <stop
            offset="0.917"
            stopColor="#0072ff"
            stopOpacity="0.576"
          ></stop>
          <stop
            offset="1"
            stopColor="#0072ff"
            stopOpacity="0.722"
          ></stop>
        </linearGradient>
      </defs>
      <g transform="translate(-.795 .621)">
        <path
          fill="url(#pattern)"
          d="M78.725 163.4C27.313 93.693 98.41 22.16 141.254-.621L1207.248.2c2.316 275.085-.079 815.723-.079 811.14-155.745 17.652-362.758 177.043-508.85-53.34-71.357-112.525-189.471-92.848-293.686-150.941s-28.912-184.07-77.546-300.259-184.095-56.257-248.362-143.4z"
          data-name="81A+qqYaYFL._SX450_"
          opacity="0.385"
          transform="translate(14.354)"
        ></path>
        <path
          fill="url(#linear-gradient)"
          d="M17.832 170.313C-36.292 99.847 51.872 23.051 96.975.023h1124.7c1.032 278.328.01 815.722.01 820.541-163.957 17.846-384.467 179.178-538.264-53.7-75.121-113.742-199.466-93.851-309.176-152.573s-30.437-186.067-81.637-303.511S85.487 258.4 17.832 170.313z"
          data-name="Path 1"
          transform="translate(0 .154)"
        ></path>
        <path
          fill="url(#linear-gradient-2)"
          d="M78.725 163.4C27.313 93.693 98.41 22.16 141.254-.621L1207.248.2c2.316 275.085-.079 815.723-.079 811.14-155.745 17.652-362.758 177.043-508.85-53.34-71.357-112.525-189.471-92.848-293.686-150.941s-28.912-184.07-77.546-300.259-184.095-56.257-248.362-143.4z"
          data-name="Path 2"
          transform="translate(14.354)"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
