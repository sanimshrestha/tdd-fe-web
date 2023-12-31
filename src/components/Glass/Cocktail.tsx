import React from "react";
import { GlassProps } from "./types";

const Cocktail = (props: GlassProps) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div>

      {/* clip path from svg for masking the drink stack */}
      <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.00442477876, 0.00684931506)" fill="#fff">
            {/* transform = scale is 1/226, 1/146 -- for clippath responsiveness */}
            <path
              d="M113 144.609C113 144.609 1.51465 101.101 1.51465 
            1.49684H224.485C224.485 95.8264 113 144.609 113 144.609Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg width="100%" height="100%" viewBox="0 0 226 342" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M113 144.609C113 144.609 1.51465 101.101 1.51465 
              1.49684H224.485C224.485 95.8264 113 144.609 113 144.609Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <path
          d="M113 144.609L113 332.503"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <path
          d="M60 340.503C101.654 331.011 124.602 331.083 166 340.503"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>

    </div>
  );
};

export default Cocktail;
