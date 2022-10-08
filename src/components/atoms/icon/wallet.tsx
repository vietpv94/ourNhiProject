export interface IWalletIconProps {
  color?: string;
}

export function WalletIcon({ color = "#37373b" }: IWalletIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33325 8.00008C1.33325 6.18675 2.42659 4.92008 4.12659 4.70675C4.29992 4.68008 4.47992 4.66675 4.66659 4.66675H11.3333C11.5066 4.66675 11.6733 4.67341 11.8333 4.70007C13.5533 4.90007 14.6666 6.17341 14.6666 8.00008V11.3334C14.6666 13.3334 13.3333 14.6667 11.3333 14.6667H4.66659C2.66659 14.6667 1.33325 13.3334 1.33325 11.3334V10.6734"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.8334 4.69992C11.6734 4.67325 11.5067 4.66659 11.3334 4.66659H4.66671C4.48004 4.66659 4.30004 4.67992 4.12671 4.70659C4.22004 4.51992 4.35338 4.34659 4.51338 4.18659L6.68004 2.01325C7.59338 1.10659 9.07338 1.10659 9.98671 2.01325L11.1534 3.19326C11.58 3.61326 11.8067 4.14658 11.8334 4.69992Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6666 8.33325H12.6666C11.9333 8.33325 11.3333 8.93325 11.3333 9.66659C11.3333 10.3999 11.9333 10.9999 12.6666 10.9999H14.6666"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
