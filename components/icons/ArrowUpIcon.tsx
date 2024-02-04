import React from "react";
import { CustomIconProps } from "./types";

const ArrowUpIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
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
            d="M7.99998 12.6666V3.33331M7.99998 3.33331
            L3.33331 7.99998M7.99998 3.33331L12.6666 7.99998"
            stroke="#94969C"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });


ArrowUpIcon.displayName = "ArrowUpIcon"

export default ArrowUpIcon;

