import * as React from "react";

export interface IToggleIconProps {
  color?: string;
  isToggle?: boolean;
}

export function ToggleIcon({
  color = "#4A65EF",
  isToggle = true,
}: IToggleIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isToggle ? (
        <>
          {" "}
          <path
            d="M9.33337 13.3334C12.28 13.3334 14.6667 10.9467 14.6667 8.00008C14.6667 5.05341 12.28 2.66675 9.33337 2.66675H6.66671C3.72004 2.66675 1.33337 5.05341 1.33337 8.00008C1.33337 10.7201 3.36671 12.9601 5.99337 13.2934"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.33329 5.33325C7.85996 5.33325 6.66663 6.52659 6.66663 7.99992C6.66663 9.47325 7.85996 10.6666 9.33329 10.6666C10.8066 10.6666 12 9.47325 12 7.99992C12 7.67992 11.94 7.36659 11.84 7.07992"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M6.66671 13.3334C3.72004 13.3334 1.33337 10.9467 1.33337 8.00008C1.33337 5.05341 3.72004 2.66675 6.66671 2.66675H9.33337C12.28 2.66675 14.6667 5.05341 14.6667 8.00008C14.6667 10.7201 12.6334 12.9601 10.0067 13.2934"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.66667 5.33325C8.14 5.33325 9.33333 6.52659 9.33333 7.99992C9.33333 9.47325 8.14 10.6666 6.66667 10.6666C5.19333 10.6666 4 9.47325 4 7.99992C4 7.67992 4.06 7.36659 4.16 7.07992"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
}
