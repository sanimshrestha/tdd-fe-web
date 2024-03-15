import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Rocks = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none z-10">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="rocks-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00324675324, 0.00373134328)"
            data-width="308" data-height="268"
            fill="#fff">
            {/* transform = scale is 1/308, 1/268 -- for clippath responsiveness */}
            <path d="M0 0H308V255C308 262.18 302.18 268 295 268
            H13C5.82029 268 0 262.18 0 255V0Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="rocks-svg" width="100%" height="100%" viewBox="0 0 316 273" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.00013 1L1 256C0.999996 264.837 8.25294 272 17.0895 272
        H298.91C307.747 272 315 264.837 315 256L315 1"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Rocks;
