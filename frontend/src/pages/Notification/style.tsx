import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  & * {
    font-family: "SF Pro Display" !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px 0 0 20px;
  gap: 20px;
`;

export const Main = styled.div`
  flex: 1;
  margin-top: 20px;
  padding-right: 20px;
  overflow: auto;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & > .title {
    color: #37373b;
    font-weight: 600;
    font-size: 16px;
  }
  & > .read-all {
    color: #00a3ff;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    background: #e6f6ff;
    border-radius: 4px;
    padding: 8px 18px;
  }
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  top: calc(80px + 20px);
  left: 0;
  min-width: 300px;
  height: 100%;
  background: #fefefe;
  border: 1px solid #dde2e8;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px 0;
  padding-left: 16px;
  overflow: hidden;
`;

export const ItemSideBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  gap: 10px;
  & > .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    & > .name,
    & > .unread {
      color: #37373b;
      font-weight: 500;
      font-size: 14px;
      text-transform: capitalize;
    }
  }

  &:hover,
  &.active {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100%;
      background: #00a3ff;
    }
    & > .content {
      & > .name,
      & > .unread {
        color: #00a3ff;
      }
    }
  }
`;

export const List = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.div`
  background: transparent;
  display: flex;
  gap: 16px;
  padding: 16px 40px 16px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e6f6ff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.075);
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > .title {
    color: #000000;
    font-weight: 400;
    font-size: 14px;
  }
  & > .description {
    width: 100%;
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & > .time {
    color: #c1cbd7;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const DetailWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.7);
`;

export const NotificationDetail = styled.div`
  position: absolute;
  top: calc(50% - 80px);
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border: 1px solid #ccedff;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 16px;
  height: 300px;
  width: 90vw;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  & > .svg {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  & > .title {
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 30px;
    text-align: center;
  }
  & > .content {
    & > .title {
      color: #000000;
      font-weight: 400;
      font-size: 14px;
    }
    & > .description {
      color: #8c8c92;
      font-weight: 400;
      font-size: 14px;
      margin-top: 20px;
      line-height: 20px;
    }
    & > .time {
      color: #c1cbd7;
      font-weight: 400;
      font-size: 12px;
      margin-top: 10px;
    }
  }
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ItemTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 12px;
  &.active {
    background: #e6f6ff;
    border-radius: 4px;
  }
`;
