import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Coupe = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none z-10">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="coupe-mask" clipPathUnits="objectBoundingBox"
            // transform="scale(0.00228310502, 0.00467289719)"
            transform="scale(0.00228310502, 0.00467289719)"
            data-width="437.46" data-height="213.5"
            fill="#fff">
            {/* transform = scale is 1/438, 1/214 -- for clippath responsiveness */}
            {/* <path d="M219 213.5C-10 213.5 -34.4789 117.687 33.9997 0H405
            C472.5 119 447.999 213.5 219 213.5Z"/> */}
            <path d="M219 213.5C-10 213.5 -34.4789 117.687 33.9997 0H405
            C472.5 119 447.999 213.5 219 213.5Z"
            />

          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="coupe-svg" width="100%" height="100%" viewBox="0 0 448 706" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M33.9999 1C-70 186.5 97.9999 218 224 218M224 218
        L223.863 637.073C223.861 645.057 217.967 651.758 210.114 653.197
        C181.85 658.375 138.659 670.655 96.9999 705M224 218
        C350 218 518 186.5 414 1M224 218L224.136 637.073
        C224.139 645.057 230.033 651.758 237.886 653.197
        C266.15 658.375 309.341 670.655 351 705"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Coupe;
