import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const DashboardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow-y: auto;
`;

export const Title = styled.div`
  color: #3f3f3f;
  font-weight: 600;
  font-size: 24px;
`;

export const CardGroup = styled.div`
  position: relative;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  filter: drop-shadow(32px 19px 15px rgba(28, 46, 64, 0.01))
    drop-shadow(18px 11px 13px rgba(28, 46, 64, 0.02))
    drop-shadow(8px 5px 9px rgba(28, 46, 64, 0.03))
    drop-shadow(2px 1px 5px rgba(28, 46, 64, 0.04))
    drop-shadow(0px 0px 0px rgba(28, 46, 64, 0.04));
  & > .card {
    position: relative;
  }
  @media ${breakpoints.xs} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AffiliateLink = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  top: calc(100% - 5px);
  left: 0;
  background: #4a65ef;
  box-shadow: 32px 19px 15px rgba(28, 46, 64, 0.01),
    18px 11px 13px rgba(28, 46, 64, 0.02), 8px 5px 9px rgba(28, 46, 64, 0.03),
    2px 1px 5px rgba(28, 46, 64, 0.04), 0px 0px 0px rgba(28, 46, 64, 0.04);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & > .label {
    white-space: nowrap;
    color: #e6f6ff;
    font-weight: 600;
    font-size: 16px;
  }
  & > .icon {
    cursor: pointer;
  }
  & > .link {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
`;

export const System = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 20px;
`;

export const Info = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-right: 20px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 100px;
  & > .name {
    text-transform: capitalize;
    color: #8c8c92;
    font-weight: 400;
    font-size: 14px;
  }
  & > .value {
    color: #37373b;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ListAffiliate = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Level = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export const Link = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #ccedff;
  align-items: center;
  overflow: hidden;
  & > .link {
    width: 40px;
    height: 100%;
    border-right: 1px solid #ccedff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > .copy {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #00a3ff;
  }
  & > .main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4a65ef;
    font-weight: 400;
    font-size: 16px;
  }
`;
