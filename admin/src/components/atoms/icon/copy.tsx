import * as React from "react";

export interface ICopyIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function CopyIcon({ color = "white", customStyle }: ICopyIconProps) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        d="M14.5 8H4.5C3.397 8 2.5 8.897 2.5 10V20C2.5 21.103 3.397 22 4.5 22H14.5C15.603 22 16.5 21.103 16.5 20V10C16.5 8.897 15.603 8 14.5 8Z"
        fill={color}
      />
      <path
        d="M20.5 2H10.5C9.96957 2 9.46086 2.21071 9.08579 2.58579C8.71071 2.96086 8.5 3.46957 8.5 4V6H16.5C17.0304 6 17.5391 6.21071 17.9142 6.58579C18.2893 6.96086 18.5 7.46957 18.5 8V16H20.5C21.0304 16 21.5391 15.7893 21.9142 15.4142C22.2893 15.0391 22.5 14.5304 22.5 14V4C22.5 3.46957 22.2893 2.96086 21.9142 2.58579C21.5391 2.21071 21.0304 2 20.5 2Z"
        fill={color}
      />
    </svg>
  );
}
