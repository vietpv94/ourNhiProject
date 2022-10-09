import * as React from "react";
import {
  Description,
  ListButton,
  Section,
  TheDAOWrapper,
  Title,
} from "./style";
import { Button } from "@Components/atoms/Button";

export interface ITheDAOProps {}

export function TheDAO(props: ITheDAOProps) {
  return (
    <Section>
      <TheDAOWrapper>
        <Title>The Lido DAO</Title>
        <Description>
          The Lido DAO governs Lido’s liquid staking protocols. <br />
          Check out our primer to learn more and get in touch to join the
          community.
        </Description>
        <ListButton>
          <Button type="silver" text="Read primer" />
          <Button type="outline" text="Apply to be a Node Operator" />
        </ListButton>
      </TheDAOWrapper>
    </Section>
  );
}
