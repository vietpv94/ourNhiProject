import styled from "styled-components";
import mask from "@Assets/images/profile/mask.png";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  overflow-y: auto;
  overflow-x: hidden;
  & * {
    font-family: "SF Pro Display" !important;
  }
  & > .mask {
    position: absolute;
    width: 100vw;
    height: 50vh;
    background: url(${mask}) no-repeat;
    background-size: cover;
    bottom: 0;
    left: 0;
  }
`;

export const Main = styled.main`
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 0 100px;
  & > .title {
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0 0 20px;
  }
`;

export const QA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  padding: 26px 32px;
  background: #ccedff;
  border: 1px solid #00a3ff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  & > .question {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Answer = styled.div`
  width: 100%;
  padding: 26px 40px;
  background: #e6f6ff;
  border: 1px solid #00a3ff;
  border-radius: 16px;
`;

export const UL = styled.ul`
  & > li {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #3f3f3f;
    &:before {
      content: "•";
      font-size: 20px;
      color: #00a3ff;
      display: inline-block;
      width: 20px;
      margin-left: -20px;
    }
  }
`;
