import styled from "styled-components";

export const FormWrapper = styled.form`
  position: relative;
  width: 100%;
  padding: 24px;
  background: #fff;
  background: #ffffff;
  border: 0.5px solid #4a65ef;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 19.3668px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  & > label {
    width: 100px;
    color: #27272a;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
  }
  & > .input {
    flex: 1;
    height: 40px;
    padding: 10px 10px 10px 20px;
    background: #f8fafc;
    border: 1.21042px solid #c1cbd7;
    border-radius: 4.8417px;
    display: flex;
    align-items: center;
    gap: 20px;
    & > input {
      flex: 1;
      outline: none;
      border: none;
      color: #37373b;
      font-weight: 400;
      font-size: 14px;
      background: transparent;
      &::placeholder {
        color: #8c8c92;
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
`;

export const FileWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const Box = styled.div`
  position: relative;
  flex: 1;
  aspect-ratio: 214 / 124;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.43076px dashed #c0c0c0;
  border-radius: 3.5769px;
  & > label {
    position: absolute;
    color: #00a3ff;
    font-weight: 400;
    font-size: 10px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;
