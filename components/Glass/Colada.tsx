import { drinkSchemaOutput } from "@server/schema/drink.schema";
import React from "react";

const Colada = (props: drinkSchemaOutput["glass"]) => {
  const { strokeColor = "white", strokeWidth = 2 } = props;

  return (
    <div className="relative pointer-events-none">

      {/* clip path from svg for masking the drink stack */}
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" height="0" width="0">
        <defs>
          <clipPath id="colada-mask" clipPathUnits="objectBoundingBox"
            transform="scale(0.006711409395973154, 0.003246753246753247)"
            fill="#fff">
            {/* transform = scale is 1/149, 1/308 -- for clippath responsiveness */}
            <path
              d="M19.5434 102.566C19.5434 65.5855 5.88865 12.0681 1.9873 
              1H146.987C142.219 18.7957 132.682 64.023 132.682 102.566C132.682
               150.745 146.987 178.089 146.987 223.013C146.987 267.936 119.678
                307 77.4133 307 C35.1487 307 4.5882 267.285 4.5882 223.013
                C4.5882 178.74 19.5434 148.792 19.5434 102.566Z"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Svg for the glass to display */}
      <svg width="100%" height="100%" viewBox="0 0 149 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M139.543 374.566C139.543 337.586 125.889 284.068 121.987 273
              H266.987C262.219 290.796 252.682 336.023 252.682 374.566
              C252.682 422.745 266.987 450.089 266.987 495.013
              C266.987 539.936 239.678 579 197.413 579
              C155.149 579 124.588 539.285 124.588 495.013
              C124.588 450.74 139.543 420.792 139.543 374.566Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{
            transform: "translate(-121px, -272px)"
          }}
        />
        <path
          d="M196.987 578L196.987 642"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{
            transform: "translate(-121px, -272px)"
          }}
        />
        <path
          d="M143.987 650C185.641 640.508 208.589 640.58 249.987 650"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{
            transform: "translate(-121px, -272px)"
          }}
        />
      </svg>

    </div>
  );
};

export default Colada;
