import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { Flex } from "@Components/molecules/box";
const ModalWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;
export default function Modal(props: { children: React.ReactNode }) {
  const [portal, setPortal] = useState<any>(null);
  useLayoutEffect(() => setPortal(document.querySelector("#container")), []);

  return (
    portal &&
    createPortal(
      <ModalWrapper justifyContent="center" alignItems="center">
        {props.children}
      </ModalWrapper>,
      portal
    )
  );
}
