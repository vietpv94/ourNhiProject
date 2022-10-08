import * as React from "react";

export interface IBlockScanIconProps {
  color?: string;
}

export function BlockScanIcon({ color = "#00A3FF" }: IBlockScanIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2C20 2 22 4 22 7V9"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 9V7C2 4 4 2 7 2H12.77"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 15V17C22 20 20 22 17 22H11.47"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 15V17C2 20 4 22 7 22"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.69995 9.26001L12 12.33L17.2599 9.28003"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17.7701V12.3201"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.76 6.29006L7.55998 8.07009C6.83998 8.47009 6.23999 9.48008 6.23999 10.3101V13.7001C6.23999 14.5301 6.82998 15.5401 7.55998 15.9401L10.76 17.7201C11.44 18.1001 12.56 18.1001 13.25 17.7201L16.45 15.9401C17.17 15.5401 17.77 14.5301 17.77 13.7001V10.3101C17.77 9.48008 17.18 8.47009 16.45 8.07009L13.25 6.29006C12.56 5.90006 11.44 5.90006 10.76 6.29006Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
