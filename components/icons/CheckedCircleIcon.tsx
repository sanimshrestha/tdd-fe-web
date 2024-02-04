import React from "react";
import { CustomIconProps } from "./types";

const CheckedCircleIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={className}
      >
        <g clipPath="url(#clip0_468_77)">
          <path
            fill={props.color || "none"}
            d="M6.25002 9.99996L8.75002 12.5L13.75 7.49996M18.3334 9.99996
            C18.3334 14.6023 14.6024 18.3333 10 18.3333
            C5.39765 18.3333 1.66669 14.6023 1.66669 9.99996
            C1.66669 5.39759 5.39765 1.66663 10 1.66663
            C14.6024 1.66663 18.3334 5.39759 18.3334 9.99996Z"
            stroke="#17B26A"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_468_77">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

    );
  });

CheckedCircleIcon.displayName = "CheckedCircleIcon"

export default CheckedCircleIcon;

