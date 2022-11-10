import styled from "styled-components";

export const TranferWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000000;
  font-weight: 600;
  font-size: 24px;
`;

export const Box = styled.div`
  position: relative;
  z-index: 2;
  background: #f8fafc;
  border: 1px solid #c1cbd7;
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FromTo = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    & > .label{
        width: 20%;
        display: flex;
        justify-content: flex-start
        align-items: center;
        gap: 10px;
        & > svg, & > .arrow{
            width: 12px;
            height: 12px;
        }
        & > span{
            color: #C1CBD7;
            font-weight: 400;
            font-size: 12px;
        }
    }
    & > .selector{
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        & > span{
            color: #37373B;
            font-weight: 400;
            font-size: 14px;
        }
        & > svg, & > .arrow{
            width: 12px;
            height: 12px;
        }
    }
`;

export const Warning = styled.div`
  color: #ff476a;
  font-weight: 400;
  font-size: 10px;
  margin: 5px;
  width: 100%;
  text-align: start;
`;

export const Token = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const TokenImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.5px solid #00a3ff;
`;

export const Label = styled.div`
  color: #8c8c92;
  font-weight: 400;
  font-size: 12px;
  width: 100%;
  text-align: start;
  margin-top: 15px;
`;

export const Input = styled.input`
  flex: 1;
  color: #37373b;
  font-weight: 400;
  font-size: 14px;
  padding-right: 10px;
  border: none;
  outline: none;
  background: transparent;
`;

export const Max = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  & > .sol {
    color: #c1cbd7;
    font-weight: 400;
    font-size: 14px;
  }
  & > .max {
    color: #00a3ff;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 12px;
  }
  & > .value {
    color: #37373b;
    font-weight: 400;
    font-size: 12px;
  }
`;
