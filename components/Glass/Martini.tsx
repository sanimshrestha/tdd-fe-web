import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Martini = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none z-10">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="martini-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00201612903, 0.00374531835)"
            data-width="496" data-height="267"
            fill="#fff">
            {/* transform = scale is 1/496, 1/267 -- for clippath responsiveness */}
            <path
              d="M248 267L0 0H496L248 267Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="martini-svg" width="100%" height="100%" viewBox="0 0 506 707" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.8009L253 273M253 273V637.17M253 273L505 1.8009M253 637.17
          C253 645.327 246.848 652.085 238.82 653.529
          C210.319 658.654 180.406 670.972 127 706M253 637.17
          C253 645.327 259.152 652.085 267.18 653.529
          C295.681 658.654 325.594 670.972 379 706"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Martini;
