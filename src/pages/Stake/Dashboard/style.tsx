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
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  border-radius: 16px 16px 0px 0px;
  background: #ffffff;
  width: 100%;
  gap: 30px;
  margin-bottom: 60px;
  filter: drop-shadow(32px 19px 15px rgba(28, 46, 64, 0.01))
    drop-shadow(18px 11px 13px rgba(28, 46, 64, 0.02))
    drop-shadow(8px 5px 9px rgba(28, 46, 64, 0.03))
    drop-shadow(2px 1px 5px rgba(28, 46, 64, 0.04))
    drop-shadow(0px 0px 0px rgba(28, 46, 64, 0.04));
  & > .card {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 1px;
      height: 85px;
      background: #dde2e8;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 30px 40px;
  gap: 15px;
  & > .icon {
    height: 85px;
    width: 85px;
    border-radius: 50%;
    background: #e6f6ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .content {
    min-height: 85px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 7px;
    & > .title {
      color: #4a65ef;
      font-weight: 400;
      font-size: 14px;
      text-transform: capitalize;
    }
    & > .value {
      color: #333333;
      font-weight: 600;
      font-size: 32px;
    }
    & > .percent {
      font-weight: 400;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 3px;
    }
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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
`;

export const Info = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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