import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: rgb(248, 250, 252);
  padding: 20px;
`;

export const BlogsWrapper = styled.div`
  padding-top: 60px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  min-width: 320px;
  margin: auto;
  & .slick-track {
    display: flex !important;
    & .slick-slide {
      height: inherit !important;
      display: flex !important;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  color: rgb(39, 56, 82);
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: rgb(39, 56, 82);
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

export const Card = styled.div`
  width: calc(100% - 20px);
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(228 231 240) 0px 8px 32px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  & > img {
    width: 100%;
    height: auto;
  }
  & > .content {
    flex: 1;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > .title {
      color: #37373b;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
    & > .time {
      margin-top: 20px;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #8c8c92;
    }
  }
`;
