import styled from "styled-components";

export const BadgeWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  border: 1px solid #ccedff;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.div`
  background: #ff476a;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  border-radius: 50%;
  aspect-ratio: 1;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    color: #ffffff;
    font-weight: 400;
    font-size: 6px;
  }
`;
