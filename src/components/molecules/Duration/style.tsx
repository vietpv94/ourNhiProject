import { breakpoints } from "@Utils/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const DurationWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  & > .num {
    display: flex;
    gap: 10px;
    flex: 1;
  }
  @media ${breakpoints.sm} {
    justify-content: space-between;
    width: 100%;
    & > .num {
      justify-content: flex-end;
    }
  }
`;

export const Label = styled.div`
  color: #1e1e20;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
`;

export const Num = styled.div`
  position: relative;
  cursor: pointer;
  height: 40px;
  aspect-ratio: 1;
  background: rgba(0, 163, 255, 0.1);
  border-radius: 4px;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #00a3ff;
    font-weight: 600;
    font-size: 14px;
  }
  &.active {
    & > span {
      color: #ffffff;
    }
  }
`;

export const Active = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00a3ff;
  border-radius: 4px;
`;
