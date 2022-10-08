export interface ILogoutIconProps {
  color?: string;
}

export function LogoutIcon({ color = "#37373b" }: ILogoutIconProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.39185 9.76701L2.69025 8.05529L4.40197 6.3537"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.18371 8.06564L2.73706 8.05542"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.51687 8.07541L8.21021 8.07153"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0411 4.403C12.865 5.31211 13.3613 6.56026 13.3568 8.08692C13.3469 11.4202 10.9543 13.4131 8.00769 13.4044"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.03931 2.73779C8.7393 2.73987 9.40563 2.85518 10.0183 3.07033"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
