import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps {
  color?: string;
  direction: "up" | "down" | "left" | "right";
  style?: "outline" | "solid";
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
  style = "solid",
}: IArrowIconProps) {
  return (
    <Wrapper direction={direction}>
      {style === "outline" ? (
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.92 1.00003L10.4 7.52003C9.62996 8.29003 8.36996 8.29003 7.59996 7.52003L1.07996 1.00003"
            stroke={color}
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 9L0.0717964 0H13.9282L7 9Z" fill={color} />
        </svg>
      )}
    </Wrapper>
  );
}
