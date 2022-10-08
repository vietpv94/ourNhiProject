import { motion } from "framer-motion";
import styled from "styled-components";

export const TabWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
`;

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  color: #dddde8;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 0;
  height: max-content;
  text-transform: capitalize;
  &.active {
    color: #323236;
  }
`;

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00a3ff;
  border-radius: 4px;
`;
