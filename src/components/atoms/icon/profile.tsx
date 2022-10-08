import * as React from "react";

export interface IProfileIconProps {
  color?: string;
}

export function ProfileIcon({ color = "#00A3FF" }: IProfileIconProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99138 5.3896C10.1372 5.68336 10.2229 6.01695 10.2218 6.37028C10.2116 7.55026 9.28211 8.51417 8.10868 8.54403C8.06204 8.53722 8.00204 8.53704 7.94869 8.54355C6.77548 8.50007 5.84499 7.53731 5.84849 6.35731C5.85207 5.15065 6.82831 4.17354 8.04164 4.17714"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5023 12.9569C11.3124 14.0401 9.73709 14.6954 8.00377 14.6903C6.27044 14.6851 4.69907 14.0205 3.51564 12.9303C3.58416 12.3038 3.98598 11.6917 4.70073 11.2138C6.53099 10.0059 9.51764 10.0147 11.3274 11.2334C12.0393 11.7156 12.4375 12.3301 12.5023 12.9569Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.70213 4.00801C1.86549 5.11887 1.36138 6.50405 1.35693 8.00404C1.34602 11.684 4.32381 14.6795 8.00379 14.6905C11.6838 14.7014 14.6793 11.7236 14.6902 8.04359C14.7011 4.36361 11.7233 1.36809 8.04335 1.35718C7.09002 1.35435 6.17609 1.55164 5.35501 1.91587"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
