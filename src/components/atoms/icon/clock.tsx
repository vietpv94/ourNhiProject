import * as React from "react";

export interface IClockIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function ClockIcon({ color = "#4A65EF", customStyle }: IClockIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        d="M10.4739 10.12L8.40724 8.88671C8.04724 8.67338 7.75391 8.16005 7.75391 7.74005V5.00671"
        stroke="#4A65EF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.66732 4.00004C1.83398 5.11337 1.33398 6.50004 1.33398 8.00004C1.33398 11.68 4.32065 14.6667 8.00065 14.6667C11.6807 14.6667 14.6673 11.68 14.6673 8.00004C14.6673 4.32004 11.6807 1.33337 8.00065 1.33337C7.04732 1.33337 6.13398 1.53337 5.31398 1.90004"
        stroke="#4A65EF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
