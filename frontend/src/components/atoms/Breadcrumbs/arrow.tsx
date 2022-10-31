import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps {
  type: "outline" | "filled" | "round" | "fat";
  color?: string;
  customStyle?: React.SVGAttributes<SVGElement>;
  onClick?: () => void;
  direction?: "left" | "right" | "up" | "down";
}

const ArrowWrapper = styled.div<{ direction: string }>`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(
    ${({ direction }) => {
      switch (direction) {
        case "left":
          return "180deg";
        case "right":
          return "0deg";
        case "up":
          return "-90deg";
        case "down":
          return "90deg";
      }
    }}
  );
`;

export function ArrowIcon({
  color = "#D8D8F3",
  customStyle,
  onClick,
  type,
  direction = "right",
}: IArrowIconProps) {
  return (
    <ArrowWrapper direction={direction}>
      {type === "outline" && (
        <svg
          cursor={"pointer"}
          width="10"
          height="17"
          viewBox="0 0 10 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
          onClick={onClick}
        >
          <path
            d="M1 1L8.03125 8.03125L1 15.0625"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === "filled" && (
        <svg
          cursor={"pointer"}
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
          onClick={onClick}
        >
          <g clip-path="url(#clip0_120_58)">
            <path
              d="M3.28027 16.7144L11.2451 9.88924C11.3734 9.77923 11.4764 9.64276 11.547 9.48919C11.6177 9.33563 11.6542 9.16861 11.6542 8.99959C11.6542 8.83057 11.6177 8.66355 11.547 8.50999C11.4764 8.35643 11.3734 8.21996 11.2451 8.10994L3.28027 1.2847C2.52002 0.6334 1.3457 1.1734 1.3457 2.1744L1.3457 15.8267C1.3457 16.8277 2.52002 17.3678 3.28027 16.7144Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_120_58">
              <rect
                width="17"
                height="12"
                fill={color}
                transform="translate(0.5 17.5) rotate(-90)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {type === "round" && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
          onClick={onClick}
          cursor={"pointer"}
        >
          <path
            d="M20.1806 13.75L26.231 20L20.1806 26.25M25.3902 20H13.1211"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.3103 20C34.3103 11.7188 27.7554 5 19.6762 5C11.5968 5 5.04199 11.7188 5.04199 20C5.04199 28.2812 11.5968 35 19.6762 35C27.7554 35 34.3103 28.2812 34.3103 20Z"
            stroke={color}
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      )}
      {type === "fat" && (
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
          onClick={onClick}
          cursor={"pointer"}
        >
          <path
            d="M2.07442 15.7701L8.92627 8.91829L2.07442 2.06644"
            stroke={color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </ArrowWrapper>
  );
}
