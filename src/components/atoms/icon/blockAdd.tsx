export interface IBlockAddIconProps {
  color?: string;
}

export function BlockAddIcon({ color = "#37373b" }: IBlockAddIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.49 17.98H17.51"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 16.52V19.51"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 21.61V12.54"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.38989 14.83V9.17C2.38989 7.79 3.37989 6.11002 4.58989 5.44002L9.92989 2.48C11.0699 1.84 12.9299 1.84 14.0699 2.48L19.4099 5.44002C20.6199 6.11002 21.6099 7.79 21.6099 9.17V14.83C21.6099 14.88 21.6099 14.92 21.5999 14.97C20.8999 14.36 19.9999 14 18.9999 14C18.0599 14 17.1899 14.33 16.4999 14.88C15.5799 15.61 14.9999 16.74 14.9999 18C14.9999 18.75 15.2099 19.46 15.5799 20.06C15.6699 20.22 15.7799 20.37 15.8999 20.51L14.0699 21.52C12.9299 22.16 11.0699 22.16 9.92989 21.52L4.58989 18.56"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
