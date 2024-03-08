import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Collins = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none z-10">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="collins-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00390625, 0.00141242937)"
            fill="#fff">
            {/* transform = scale is 1/256, 1/708 -- for clippath responsiveness */}
            <path
              d="M1 1V691C1 699.837 8.27348 707 17.11 707H238.89
              C247.726 707 255 699.837 255 691V1"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="collins-svg" width="100%" height="100%" viewBox="0 0 256 708" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: "256/708",
        }}
      >
        <path
          d="M1 1V691C1 699.837 8.27348 707 17.11 707H238.89
          C247.726 707 255 699.837 255 691V1"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Collins;
