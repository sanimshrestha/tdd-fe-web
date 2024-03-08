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
            transform="scale(0.00198412698, 0.0036900369)"
            fill="#fff">
            {/* transform = scale is 1/504, 1/271 -- for clippath responsiveness */}
            <path
              d="M0 0 L252 271 L504 0Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="martini-svg" width="100%" height="100%" viewBox="0 0 504 704" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: "504/704",
        }}
      >
        <path
          d="M0 0 L252 271 V635.17 C252 643.327 245.848 650.085 237.82 651.529 
          C209.319 656.654 179.406 668.972 126 704"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M504.8009 0 L252 271V635.17
        C252 643.327 258.152 650.085 266.18 651.529
        C294.681 656.654 324.594 668.972 378 704"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Martini;
