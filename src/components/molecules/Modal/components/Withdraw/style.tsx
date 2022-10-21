import styled from "styled-components";

export const WithdrawWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  & > .btn {
    margin-top: 20px;
    & > div {
      height: 35px;
      font-size: 14px;
    }
  }
`;

export const Title = styled.div`
  color: #000000;
  font-weight: 600;
  font-size: 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  gap: 7px;
  & > label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  background: #f8fafc;
  border: 1px solid #c1cbd7;
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  & > .icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 0.5px solid #00a3ff;
    border-radius: 100px;
    cursor: pointer;
  }
  & > input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
  & > .label {
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    color: #37373b;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  background: #f8fafc;
  padding: 13px 24px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  width: calc(100% + 60px);
  transform: translate(-30px, 30px);
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc( 100% + 5px );
  left: 0;
  background: #fff;
  border: 1px solid #c1cbd7;
  border-radius: 8px;
  width: max-content;
  overflow: hidden;
  z-index: 1;
  & > li {
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    & > img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 0.5px solid #00a3ff;
      border-radius: 100px;
      cursor: pointer;
    }
    & > span {
      color: #37373b;
    }
    &:hover{
      background: #e6f6ff;
    }
  }
`;
