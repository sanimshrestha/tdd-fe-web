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
            transform="scale(0.00268817204, 0.00373134328)"
            fill="#fff">
            {/* transform = scale is 1/372, 1/268 -- for clippath responsiveness */}
            <path d="M114 481H486V736C486 743.18 480.18 749 473 749H127
            C119.82 749 114 743.18 114 736V540.093Z"
              style={{ transform: "translate(-114px, -481px)" }} />

          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg id="rocks-svg" width="100%" height="100%" viewBox="0 0 380 273" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{
          aspectRatio: "380/273",
        }}
      >
        <path d="M111 481L111 736C111 744.837 118.231 752 127.068 752
        C239.227 752 263.673 752 300 752"
          style={{ transform: "translate(-110px, -480px)" }}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
        <path d="M489 481L489 736C489 744.837 481.769 752 472.932 752
        C360.773 752 336.327 752 300 752"
          style={{ transform: "translate(-110px, -480px)" }}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round" />
      </svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="380" height="273" viewBox="0 0 380 273" fill="none" style="&#10;    background: black;&#10;">
        <path d="M111 481L111 736C111 744.837 118.231 752 127.068 752C239.227 752 263.673 752 300 752" stroke="white" stroke-width="2" stroke-linecap="round" style="&#10;    transform: translate(-110px, -480px);&#10;" />
        <path d="M489 481L489 736C489 744.837 481.769 752 472.932 752C360.773 752 336.327 752 300 752" stroke="white" stroke-width="2" stroke-linecap="round" style="&#10;    transform: translate(-110px, -480px);&#10;" />
        <path d="M114 481H486V736C486 743.18 480.18 749 473 749H127C119.82 749 114 743.18 114 736V540.093Z" fill="white" style="&#10;    transform: translate(-110px, -480px);&#10;" />
      </svg> */}
    </div>
  );
};

export default Rocks;
