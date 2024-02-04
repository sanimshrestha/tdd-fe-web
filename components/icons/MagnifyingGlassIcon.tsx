import React from "react";
import { CustomIconProps } from "./types";

const MagnifyingGlassIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
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
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20
            C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3
            C16.1944 3 20 6.80558 20 11.5Z"
            stroke="#CECFD2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });

MagnifyingGlassIcon.displayName = "MagnifyingGlassIcon"

export default MagnifyingGlassIcon;


