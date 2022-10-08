import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: relative;
  height: 35px;
  width: max-content;
  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  cursor: pointer;
  position: relative;
  height: 100%;
  width: max-content;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const Dropdown = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 10px);
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #f8fafc;
  border-radius: 8px;
`;

export const Item = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  & > span {
    color: #37373b;
  }
  &:hover {
    background: #e6f6ff;
    & > span {
      color: #00a3ff;
    }
    & > svg > path {
      stroke: #00a3ff !important;
    }
  }
`;

export const Info = styled.a`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > .name {
    color: #37373b;
    font-weight: 600;
    font-size: 14px;
  }
  & > .level {
    color: #8c8c92;
    font-weight: 400;
    font-size: 12px;
  }
`;
