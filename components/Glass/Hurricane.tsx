import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Hurricane = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none z-10">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="hurricane-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00409836065, 0.00170068027)"
            data-width="244" data-height="588"
            fill="#fff">
            {/* transform = scale is 1/252, 1/590 -- for clippath responsiveness */}
            <path
              d="M0 0C123 109.5 -125 588 122 588C369 588 121 109.5 244 0H0Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="hurricane-svg" width="100%" height="100%" viewBox="0 0 254 707" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1C127 109 -125 591.5 127 591.5M127 591.5L126.879 677.088
          C126.867 685.066 120.979 692.013 113.003 692.146
          C103.032 692.312 99.0496 691.361 48 706M127 591.5
          C379 591.5 127 109 253 1M127 591.5L127.121 677.088
          C127.133 685.066 133.021 692.013 140.997 692.146
          C150.968 692.312 154.951 691.361 206 706"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>

    </div>
  );
};

export default Hurricane;
