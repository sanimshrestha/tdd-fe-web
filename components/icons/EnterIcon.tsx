import React from "react";
import { CustomIconProps } from "./types";

const EnterIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
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
            d="M13.3334 2.66669V3.60002
            C13.3334 5.84023 13.3334 6.96034 12.8974 7.81598
            C12.5139 8.56863 11.902 9.18055 11.1493 9.56405
            C10.2937 10 9.17356 10 6.93335 10H2.66669M2.66669 10
            L6.00002 6.66669M2.66669 10L6.00002 13.3334"
            stroke="#94969C"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });

EnterIcon.displayName = "EnterIcon"

export default EnterIcon;

