import React from 'react';

export const Circles = () => {
  return (
    <svg>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="45%" x2="45%" y2="100%">
          <stop offset="55%" stopColor="#fa7b66" stopOpacity="1" />
          <stop offset="100%" stopColor="#f94d73" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="45%" x2="45%" y2="100%">
          <stop offset="25%" stopColor="#fa7b66" stopOpacity="1" />
          <stop offset="100%" stopColor="#f94d73" stopOpacity="1" />
        </linearGradient>
      </defs>
      <circle cx="170" cy="70" fill="url(#grad1)" r="180" />
      <circle cx="220" cy="180" fill="url(#grad2)" r="20" className="smallcircle" />
      <circle cx="120" cy="100" fill="url(#grad2)" r="60" className="circle" />
    </svg>
  );
};
