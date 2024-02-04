import React from "react";
import { CustomIconProps } from "./types";

const HamburgerIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={className}
      >
        <g>
          <path
            fill={props.color || "none"}
            d="M3 12H15M3 6H21M3 18H21"
            stroke="#CECFD2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });

HamburgerIcon.displayName = "HamburgerIcon"

export default HamburgerIcon;
