import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Coupe = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="coupe-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00197628458, 0.00460829493)"
            fill="#fff">
            {/* transform = scale is 1/506, 1/217 -- for clippath responsiveness */}
            <path d="M63 0C-41.00005 185.5 127 217 253 217 v-217Z"
            />
            <path d="M443 0C547 185.5 379 217 253 217 v-217Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="coupe-svg" width="100%" height="100%" viewBox="0 0 506 706" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: "506/706",
        }}
      >
        <path d="M63 0C-41.00005 185.5 127 217 253 217L252.863 636.073
                C252.861 644.057 246.967 650.758 239.114 652.197
                C210.85 657.375 167.659 669.655 126 704"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
        <path d="M443 0C547 185.5 379 217 253 217L253.137 636.073
                  C253.139 644.057 259.033 650.758 266.886 652.197
                  C295.15 657.375 338.341 669.655 380 704"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Coupe;
