import * as React from "react";

export interface IDollarIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function DollarIcon({
  color = "#4A65EF",
  customStyle,
}: IDollarIconProps) {
  return (
    <svg
      width="40"
      height="43"
      viewBox="0 0 40 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4531 25.4936C14.4531 27.7432 16.1031 29.5569 18.1531 29.5569H22.3365C24.1198 29.5569 25.5698 27.9699 25.5698 26.0167C25.5698 23.8891 24.6865 23.1393 23.3698 22.651L16.6531 20.2095C15.3365 19.7212 14.4531 18.9713 14.4531 16.8437C14.4531 14.8905 15.9031 13.3035 17.6865 13.3035H21.8698C23.9198 13.3035 25.5698 15.1172 25.5698 17.3669"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 10.9669V31.894"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.0002 38.8697C29.2049 38.8697 36.6668 31.0619 36.6668 21.4304C36.6668 11.799 29.2049 3.99115 20.0002 3.99115C10.7954 3.99115 3.3335 11.799 3.3335 21.4304C3.3335 31.0619 10.7954 38.8697 20.0002 38.8697Z"
        stroke={color}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
