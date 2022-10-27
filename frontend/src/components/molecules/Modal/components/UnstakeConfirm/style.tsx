import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 80px;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    font-weight: 600;
    font-size: 16px;
    color: #53ba95;
  }
`;
