import React from "react";
import { CustomIconProps } from "./types";

const AlertCircleIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
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
        <g clipPath="url(#clip0_468_1781)">
          <path
            fill={props.color || "none"}
            d="M10 6.66663V9.99996M10 13.3333H10.0083M18.3333 9.99996
            C18.3333 14.6023 14.6024 18.3333 10 18.3333
            C5.39763 18.3333 1.66667 14.6023 1.66667 9.99996
            C1.66667 5.39759 5.39763 1.66663 10 1.66663
            C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z"
            stroke="#F04438"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_468_1781">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  });

AlertCircleIcon.displayName = "AlertCircleIcon"

export default AlertCircleIcon;

