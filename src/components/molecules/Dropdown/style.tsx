import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.div`
  color: #8c8c92;
  font-weight: 500;
  font-size: 12px;
  text-transform: capitalize;
`;

export const Main = styled.div`
  position: relative;
  min-width: 100px;
  max-width: 150px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  background: #ffffff;
  border: 0.5px solid #dde2e8;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  cursor: pointer;
  & > span {
    color: #37373b;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #ffffff;
  border: 0.5px solid #dde2e8;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  z-index: 2;
`;

export const DropdownItem = styled.div`
  padding: 10px 10px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 12px;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    background: #f5f5f5;
  }
  & > span {
    color: #37373b;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
  }
`;
