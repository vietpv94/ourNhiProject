import * as React from "react";

export interface IProfileTickIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function ProfileTickIcon({
  color = "#4A65EF",
  customStyle,
}: IProfileTickIconProps) {
  return (
    <svg
      width="40"
      height="43"
      viewBox="0 0 40 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        d="M24.0664 33.7252L26.5997 36.3759L31.6664 31.0744"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2668 19.4602C20.1002 19.4427 19.9002 19.4427 19.7168 19.4602C15.7502 19.3207 12.6002 15.92 12.6002 11.7346C12.5835 7.46194 15.9002 3.99152 19.9835 3.99152C24.0668 3.99152 27.3835 7.46194 27.3835 11.7346C27.3835 15.92 24.2168 19.3207 20.2668 19.4602Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9829 38.5382C16.9496 38.5382 13.9329 37.736 11.6329 36.1316C7.59958 33.3064 7.59958 28.7024 11.6329 25.8947C16.2162 22.6859 23.7329 22.6859 28.3162 25.8947"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
