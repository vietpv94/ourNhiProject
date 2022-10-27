import * as React from "react";
import { Button } from "@Components/atoms/Button";
import { NodeIcon } from "./icon/Node";

import {
  Section,
  JoinNodeWrapper,
  Title,
  Description,
  Btn,
  Mask,
} from "./style";

export interface IJoinNodeProps {}

export function JoinNode(props: IJoinNodeProps) {
  return (
    <Section>
      <JoinNodeWrapper>
        <Mask />
        <div className="main">
          <NodeIcon />
          <Title>Become a Node Operator</Title>
          <Description>
            Lido is constantly looking to grow its set of Node Operators. Find
            out more about the requirements, expectations, and process for
            applying to be a Lido Node Operator
          </Description>
          <Btn>
            <Button type="silver" text="Join Node Operator set" />
          </Btn>
        </div>
      </JoinNodeWrapper>
    </Section>
  );
}
