import React from 'react';

const StarHalf = ({ size = 30, ...other }) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 30 30`} fill="none" {...other}>
      <g filter="url(#filter0_i_0_1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.8947 11.3232C29.6603 10.6494 29.0892 10.1514 28.3862 10.0488L20.3164 8.80371L16.7135 1.06934C16.3767 0.439453 15.7323 0 15 0C14.2677 0 13.6233 0.439453 13.2865 1.06934L9.68361 8.80371L1.56989 10.0488C0.910833 10.1514 0.339651 10.6494 0.105319 11.3232C-0.129012 11.9824 0.0320908 12.7295 0.54469 13.2275L6.43226 19.248L5.02628 27.8174C4.92376 28.5205 5.23132 29.2236 5.78785 29.6631C6.1247 29.8975 6.49085 30 6.90093 30C7.19384 30 7.5014 29.9268 7.80896 29.7656L15 25.7812L22.191 29.7656C22.4986 29.9268 22.8062 30 23.0991 30C23.5092 30 23.8753 29.8975 24.2121 29.6631C24.7687 29.2236 25.0762 28.5205 24.9737 27.8174L23.5677 19.248L29.4553 13.2275C29.9679 12.7295 30.129 11.9824 29.8947 11.3232V11.3232Z"
          fill="#E0E0E0"
        />
      </g>
      <g filter="url(#filter1_i_0_1)">
        <path
          d="M13.2865 1.06914C13.6233 0.439371 14.2677 0 15 0V25.7764L7.80896 29.7601C7.5014 29.9212 7.19384 29.9944 6.90093 29.9944C6.49085 29.9944 6.1247 29.8919 5.78785 29.6576C5.23132 29.2182 4.92376 28.5152 5.02628 27.8122L6.43226 19.2445L0.54469 13.2251C0.0320908 12.7271 -0.129012 11.9802 0.105319 11.3211C0.339651 10.6474 0.910833 10.1495 1.56989 10.047L9.68361 8.80207L13.2865 1.06914Z"
          fill="#FDCE71"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_0_1"
          x="0"
          y="0"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="0"
          y="0"
          width="15"
          height="29.9944"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
      </defs>
    </svg>
  );
};

export default StarHalf;
