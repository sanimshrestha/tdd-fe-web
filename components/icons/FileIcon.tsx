import React from "react";
import { CustomIconProps } from "./types";

const FileIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
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
        <g>
          <path
            fill={props.color || "none"}
            d="M11.6666 9.16669H6.66665M8.33331 12.5H6.66665
            M13.3333 5.83335H6.66665M16.6666 5.66669V14.3334
            C16.6666 15.7335 16.6666 16.4336 16.3942 16.9683
            C16.1545 17.4387 15.772 17.8212 15.3016 18.0609
            C14.7668 18.3334 14.0668 18.3334 12.6666 18.3334
            H7.33331C5.93318 18.3334 5.23312 18.3334 4.69834 18.0609
            C4.22793 17.8212 3.84548 17.4387 3.6058 16.9683
            C3.33331 16.4336 3.33331 15.7335 3.33331 14.3334
            V5.66669C3.33331 4.26656 3.33331 3.56649 3.6058 3.03171
            C3.84548 2.56131 4.22793 2.17885 4.69834 1.93917
            C5.23312 1.66669 5.93318 1.66669 7.33331 1.66669H12.6666
            C14.0668 1.66669 14.7668 1.66669 15.3016 1.93917
            C15.772 2.17885 16.1545 2.56131 16.3942 3.03171
            C16.6666 3.56649 16.6666 4.26656 16.6666 5.66669Z"
            stroke="#CECFD2"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </g>
      </svg>

    );
  });

FileIcon.displayName = "FileIcon"

export default FileIcon;

