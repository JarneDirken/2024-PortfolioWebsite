import React from 'react';

const DynamicMeter = ({ percentage, size = 204 }) => {
  const radius = 52; // The radius of the progress bar circle
  const strokeWidth = 12; // The width of the stroke
  const circumference = 2 * Math.PI * radius; // The circumference of the circle
  const adjustedCircumference = circumference - (strokeWidth / 2); // Adjusted to account for round caps
  const strokeDashoffset = adjustedCircumference - (adjustedCircumference * percentage) / 100; // The length of the visible bar

  return (
    <svg width={size} height={size} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle with rounded ends */}
      <circle
        cx="75"
        cy="75"
        r={radius}
        fill="none"
        stroke="#000"
        strokeWidth={strokeWidth}
        opacity="0.3"
        strokeLinecap="round"
      />
      {/* Foreground circle representing the progress with rounded ends */}
      <circle
        cx="75"
        cy="75"
        r={radius}
        fill="none"
        stroke="url(#paint0_linear_dynamic)"
        strokeWidth={strokeWidth}
        strokeDasharray={adjustedCircumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-20 75 75)`}
      />
      {/* Percentage text */}
      <text
        x="75"
        y="75"
        fill="white"
        fontWeight="bold"
        fontSize="22"
        dy=".3em"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {`${percentage}%`}
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_dynamic"
          x1="0"
          y1="75"
          x2="150"
          y2="75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA367C" />
          <stop offset="1" stopColor="#4A2FBD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DynamicMeter;
