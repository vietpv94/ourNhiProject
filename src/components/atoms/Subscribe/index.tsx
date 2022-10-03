import { Button } from "@Components/Button";
import * as React from "react";
import {
  Description,
  Input,
  Privacy,
  Section,
  SubscriberWrapper,
  Title,
} from "./style";

export interface ISubscribeProps {}

export function Subscribe(props: ISubscribeProps) {
  return (
    <Section>
      <SubscriberWrapper>
        <Title>Subscribe to our mailing list</Title>
        <Description>Stay up to date with Lido developments</Description>
        <Input>
          <input type="text" placeholder="Enter address" />
          <Button type="blue" text="Subscribe" />
        </Input>
        <Privacy>
          By subscribing you accept our{" "}
          <span style={{ color: "#00A3FF" }}>Privacy Notice</span>
        </Privacy>
      </SubscriberWrapper>
    </Section>
  );
}
