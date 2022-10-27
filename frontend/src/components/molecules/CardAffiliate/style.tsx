import styled from "styled-components";

export const renderStyle = {
  disabled: {
    border: "none",
    f: "#8C8C92",
    member: "#8C8C92",
    amount: "#8C8C92",
    header: " #DDE2E8",
    line: "#ffffff",
  },
  active: {
    border: "1px solid #DDE2E8",
    f: "#4A65EF",
    member: "#2A3751",
    amount: " #53BA95",
    header: "#E6F6FF",
    line: "#99DAFF",
  },
  pending: {
    border: "1px solid #00A3FF",
    f: "#FFFFFF",
    member: "#fff",
    amount: " #53BA95",
    header: "#00A3FF",
    line: "#ffffff",
  },
};
export const CardAffiliateWrapper = styled.div<{
  status: "disabled" | "active" | "pending";
}>`
  width: 100%;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
  border: ${(props) => renderStyle[props.status].border};
`;

export const Header = styled.div<{
  status: "disabled" | "active" | "pending";
}>`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  background: ${(props) => renderStyle[props.status].header};
  & > .f {
    position: relative;
    flex: 1;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => renderStyle[props.status].f};
    &::after {
      position: absolute;
      content: "";
      height: 100%;
      top: 0;
      right: 0;
      width: 1px;
      background: ${(props) => renderStyle[props.status].line};
    }
  }
  & > .member {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    color: ${(props) => renderStyle[props.status].member};
  }
`;

export const Amount = styled.div<{
  status: "disabled" | "active" | "pending";
}>`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => renderStyle[props.status].amount};
  }
`;
