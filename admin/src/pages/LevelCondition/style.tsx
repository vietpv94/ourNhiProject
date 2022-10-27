import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const AdminWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DetailWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  & > .title {
    color: #3f3f3f;
    font-weight: 600;
    font-size: 28px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #3f3f3f;
`;

export const Top = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .left {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: flex-end;
  }
  @media ${breakpoints.sm} {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const Box = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.43076px dashed #c0c0c0;
  border-radius: 4px;
  &.active {
    border: 1.43076px solid #00a3ff;
  }
  & > input {
    display: none;
  }
  & > .svg {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: -10px;
    right: -10px;
  }
  & > label {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  & > .center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > div {
      width: 25px;
      height: 25px;
      background: #e6f6ff;
      border-radius: 4.19556px;
    }
    & > span {
      color: #00a3ff;
      font-weight: 400;
      font-size: 10.0153px;
    }
  }
  & > .preview-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;


export const BoxPayout = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px 50px;
  background: #ffffff;
  border-radius: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  & > div > table {
    & > tbody {
      & > tr > td {
        & > .time {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
`;

export const BoxUsers = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px 50px;
  background: #ffffff;
  border-radius: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  & > div > table {
    & > tbody {
      & > tr > td {
        & > .walletAddress {
          color: rgba(41, 45, 50, 0.5);
        }
        & > .time {
          color: rgba(41, 45, 50, 0.5);
          font-weight: 500;
          font-size: 14px;
        }
        & > .status {
          margin: auto;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px;
          width: 120px;
          &.success {
            color: #53ba95;
            background: rgba(83, 186, 149, 0.3);
          }
          &.pending {
            color: #ff9900;
            background: rgba(255, 224, 130, 0.3);
          }
          &.failed {
            color: #ff6482;
            background: rgba(255, 100, 130, 0.3);
          }
        }
      }
    }
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  & > label {
    width: 130px;
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
  @media ${breakpoints.xs} {
    &.file {
      align-items: flex-start;
    }
  }
`;

type Props = {
  type: "password" | "number" | "email" | "text" | "file" | undefined;
  label?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (value: any) => void;
  [key: string]: HTMLInputElement | string | React.ReactNode;
};

export const Input = ({
  label,
  type,
  children,
  icon,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <div className="input">
        <input
          type={type}
          {...props}
          onChange={onChange}
          defaultValue={value}
        />
        {icon}
      </div>{" "}
      {children}
    </InputWrapper>
  );
};
