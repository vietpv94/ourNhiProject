import * as React from "react";

export interface IPendingIconProps {
  color?: string;
  onClick?: () => void;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function PendingIcon({
  color = "#33B5FF",
  onClick,
  customStyle,
}: IPendingIconProps) {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={"pointer"}
      onClick={onClick}
      {...customStyle}
    >
      <path
        d="M7.92093 8.53516C6.86093 9.53516 5.14094 9.53516 4.08594 8.53516"
        stroke={color}
        stroke-width="0.772059"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 3.5C1.375 4.335 1 5.375 1 6.5C1 9.26 3.24 11.5 6 11.5C8.76 11.5 11 9.26 11 6.5C11 3.74 8.76 1.5 6 1.5C5.285 1.5 4.6 1.64999 3.985 1.92499"
        stroke={color}
        stroke-width="0.772059"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
