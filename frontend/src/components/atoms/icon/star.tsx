import * as React from "react";

export interface IStarIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function SmallStarIcon({
  color = "#ffffff71",
  customStyle,
}: IStarIconProps) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        d="M4.67637 7.75214L6.87377 9.00371C7.27618 9.23308 7.76861 8.89401 7.66271 8.46519L7.08027 6.11164L9.02351 4.52599C9.37827 4.23678 9.18766 3.68828 8.7217 3.65338L6.16424 3.44894L5.1635 1.22504C4.98347 0.821146 4.36926 0.821146 4.18923 1.22504L3.18849 3.44395L0.631031 3.64839C0.165077 3.6833 -0.0255414 4.23179 0.32922 4.521L2.27246 6.10665L1.69002 8.4602C1.58412 8.88902 2.07655 9.2281 2.47897 8.99872L4.67637 7.75214Z"
        fill={color}
      />
    </svg>
  );
}
