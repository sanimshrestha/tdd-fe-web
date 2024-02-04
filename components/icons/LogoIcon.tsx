import React from "react";
import { CustomIconProps } from "./types";


const LogoIcon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="20"
        height="34"
        viewBox="0 0 20 34"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className={className}
      >
        <g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.90012 0.152771L0.922852 16.7638
            C3.22236 17.8046 7.82139 25.4813 7.82139 33.8467H9.99988
            V0.152771H3.90012ZM16.0999 0.152771L19.0771 16.7638
            C16.7776 17.8046 12.1786 25.4813 12.1786 33.8467
            H10.0001V0.152771H16.0999Z" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3804 28.0565C10.3176 28.7342 10.3237 30.553 10.3284 31.9731
          C10.3319 33.0324 10.3347 33.8698 10.3076 33.8467H9.69228
          C9.65781 33.8587 9.66349 32.9188 9.67037 31.7809
          C9.67891 30.3681 9.68929 28.6501 9.62699 28.0693
          C9.58919 27.8725 9.5502 27.6428 9.50595 27.382
          C9.13028 25.1683 8.37505 20.7178 4.73899 15.205
          C4.6788 15.1137 4.73477 14.9881 4.84333 14.9752
          C8.60125 14.5304 10.9275 14.4549 15.1606 14.9746
          C15.2679 14.9878 15.324 15.1117 15.2656 15.2027
          C11.6358 20.8618 10.8738 25.2421 10.4968 27.4092
          C10.4543 27.6536 10.4166 27.8697 10.3804 28.0565Z"
            fill={props.color || "currentColor"}
          />
          <circle
            cx="9.6359"
            cy="8.65348"
            r="1.05873"
            transform="rotate(166.993 9.6359 8.65348)"
            fill={props.color || "currentColor"} />
          <circle
            cx="7.7501"
            cy="11.3323"
            r="1.57214"
            transform="rotate(166.993 7.7501 11.3323)"
            fill={props.color || "currentColor"} />
        </g>
      </svg>
    );
  });

LogoIcon.displayName = "LogoIcon"

export default LogoIcon;

