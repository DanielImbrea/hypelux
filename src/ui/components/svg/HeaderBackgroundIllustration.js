import React from "react";

function Icon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="924"
      height="758"
      viewBox="0 0 924 758"
      preserveAspectRatio="none"
      fill="none"
      className={className}
    >
      <path
        fill="url(#paint0_linear)"
        fillOpacity="0.3"
        d="M14.542 137.431C-29.13 80.571 42.01 18.605 78.403.023H985.93c.833 224.585.008 658.212.008 662.1-132.298 14.4-310.229 144.58-434.329-43.329-60.615-91.781-160.948-75.731-249.474-123.114-88.527-47.383-24.56-150.139-65.873-244.905-41.312-94.767-167.128-42.269-221.719-113.344z"
        className="outer-path"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M75.26 131.732C33.775 75.482 91.144 17.762 125.715-.621l860.157.66c1.869 221.968-.064 658.212-.064 654.514-125.671 14.246-292.711 142.86-410.594-43.035-57.578-90.797-152.885-74.92-236.977-121.795-84.092-46.875-23.329-148.53-62.572-242.28-39.243-93.751-148.548-45.398-200.405-115.711z"
        className="inner-path"
      ></path>
      <path
        fill="url(#paint2_linear)"
        fillOpacity="0.6"
        d="M254.006 101.468C165.807 55.178 172.008 24.033 216.689.047h101.436c-23.95 3.019-11.78 10.605 9.159 25.441 56.013 39.688 379.415-45.922 463.899 38.214 91.422 91.047-9.895 218.972 60.141 299.77 69.325 79.978 88.826 67.797 134.476 85.702 0 33.194.131 92.271.131 107.027-77.729-4.451-278.224-70.565-337.235-120.416-73.763-62.313 50.082-170.516 17.563-251.375-32.52-80.858-302.005-25.08-412.253-82.942z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="88.744"
          x2="993.563"
          y1="0.023"
          y2="779.164"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.002"
            stopColor="#00C6FF"
            stopOpacity="0.67"
          ></stop>
          <stop
            offset="0.917"
            stopColor="#0072FF"
            stopOpacity="0.72"
          ></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="135.538"
          x2="1024.56"
          y1="-0.621"
          y2="734.448"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.002"
            stopColor="#00C6FF"
            stopOpacity="0.67"
          ></stop>
          <stop
            offset="0.917"
            stopColor="#0072FF"
            stopOpacity="0.72"
          ></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="297.648"
          x2="922.745"
          y1="-20.434"
          y2="552.728"
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
