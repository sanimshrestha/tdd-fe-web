import React from "react";
import { CustomIconProps } from "./types";

const ArrowDownIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={className}
      >
        <g>
          <path
            fill={props.color || "none"}
            d="M7.99998 3.33331V12.6666M7.99998 12.6666L12.6666 7.99998
            M7.99998 12.6666L3.33331 7.99998"
            stroke="#94969C"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });


ArrowDownIcon.displayName = "ArrowDownIcon"

export default ArrowDownIcon;

