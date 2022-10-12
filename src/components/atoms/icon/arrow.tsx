import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps {
  color?: string;
  direction?: "up" | "down" | "left" | "right";
  style?: "outline" | "solid" | "default";
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

const Wrapper = styled.div<{ direction: "up" | "down" | "left" | "right" }>`
  cursor: pointer;
  & > svg {
    transform: rotate(
      ${(props) =>
        props.direction === "up"
          ? "180deg"
          : props.direction === "down"
          ? "0deg"
          : props.direction === "left"
          ? "270deg"
          : "90deg"}
    );
  }
`;

export function ArrowIcon({
  color = "#37373b",
  direction = "down",
  style = "default",
  customStyle,
  onClick,
}: IArrowIconProps) {
  return (
    <Wrapper direction={direction} onClick={onClick}>
      {style === "default" && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
        >
          <path
            d="M10.6831 18.192L10.6831 5.63571"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.45654 10.8675L10.683 4.76376L16.9095 10.8675"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {style === "outline" && (
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
        >
          <path
            d="M16.92 1.00003L10.4 7.52003C9.62996 8.29003 8.36996 8.29003 7.59996 7.52003L1.07996 1.00003"
            stroke={color}
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {style === "solid" && (
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
        >
          <path
            d="M7.70776 6.71794L9.1962 5.2295L11.6215 2.80416C12.1278 2.29039 11.7651 1.41394 11.0398 1.41394L6.33265 1.41394L2.094 1.41394C1.3686 1.41394 1.006 2.29039 1.5198 2.80416L5.43354 6.71794C6.05309 7.34505 7.08065 7.34505 7.70776 6.71794Z"
            fill={color}
          />
        </svg>
      )}
    </Wrapper>
  );
}
