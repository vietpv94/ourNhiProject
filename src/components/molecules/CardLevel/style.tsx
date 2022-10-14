import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #c1cbd7;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  position: relative;
  min-width: 300px;
  height: 250px;
  display: flex;
  overflow: hidden;
`;

export const Mask = styled.img`
  position: absolute;
  width: 40%;
  aspect-ratio: 1;
  top: -15px;
  right: -10px;
`;

export const Main = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  & > .text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    & > .title {
      font-weight: 600;
      font-size: 16px;
      color: #000000;
    }
    & > .sub-title {
      color: rgba(0, 0, 0, 0.3);
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Range = styled.div<{
  completed: number;
  status: "done" | "pending" | "disabled";
}>`
  position: relative;
  width: 100%;
  height: 25px;
  & > .base {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ status }) => {
      if (status === "disabled") return "#8D8D8D";
      return "#4a66ef97";
    }};
    opacity: 0.2;
    backdrop-filter: blur(135.926px);
    border-radius: 95.2883px;
  }
  & > .from,
  & > .to {
    position: absolute;
    z-index: 1;
    height: calc(100% - 4px);
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    aspect-ratio: 1;
    background: ${({ completed }) => {
      if (completed > 0)
        return "linear-gradient(340.48deg, #4a65ef 9.32%, #33b5ff 83.24%)";
      return "linear-gradient(340.48deg, #717171 9.32%, #9C9C9C 83.24%);";
    }};

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      color: #e6f6ff;
      font-weight: 600;
      font-size: 10px;
    }
  }
  & > .to {
    right: 3px;
    left: unset;
    z-index: ${({ completed }) => (completed < 1 ? -1 : 0)};
  }
  & > .process {
    position: absolute;
    z-index: 0;
    height: calc(100% - 4px);
    width: calc(${({ completed }) => completed} * 100% - 6px);
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    aspect-ratio: 1;
    background: #4a65ef;
    border-radius: 66.1505px;
  }
  & > .text {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    & > span {
      color: #c1cbd7;
      opacity: 0.8;
      font-weight: 600;
      font-size: 10px;
      & > .hight-light {
        color: #f8fafc;
      }
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  & > .main {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    & > .name {
      color: #2a3751;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      &.done {
        color: #c1cbd7;
        text-decoration-line: line-through;
      }
    }
    & > .value {
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      color: #c1cbd7;
      & > .hight-light {
        color: #37373b;
      }
    }
  }
  & > .disable {
    & * {
      color: #c1cbd7 !important;
    }
  }
`;
