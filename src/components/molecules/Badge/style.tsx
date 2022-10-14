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

export const NotificationDetail = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
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
