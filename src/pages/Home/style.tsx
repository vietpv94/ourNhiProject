import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media ${breakpoints.sm} {
    flex-direction: column;
    & > .left,
    .right {
      width: 100%;
      padding: 0;
    }
  }
`;
export default HomeWrapper;
