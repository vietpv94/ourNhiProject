export interface IBlockIconProps {
  color?: string;
}

export function BlockIcon({ color = "#37373b" }: IBlockIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.61V12.54"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.38989 13.2501V14.8301C2.38989 16.2101 3.37989 17.8901 4.58989 18.5601L9.92989 21.5301C11.0699 22.1601 12.9399 22.1601 14.0799 21.5301L19.4199 18.5601C20.6299 17.8901 21.6199 16.2101 21.6199 14.8301V9.17006C21.6199 7.79006 20.6299 6.11006 19.4199 5.44006L14.0799 2.47006C12.9399 1.84006 11.0699 1.84006 9.92989 2.47006L4.58989 5.44006C3.37989 6.11006 2.38989 7.79006 2.38989 9.17006"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
