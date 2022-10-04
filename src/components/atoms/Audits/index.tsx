import * as React from "react";
import { AuditWrapper, Section, Title, Description, Card, List } from './style';
import { DataAudits, dataAudits } from './data';

export interface IAuditsProps {}

export const Item = (data: DataAudits) => {
  return (
    <Card>
      {data.icon}
      <div className="description">{data.description}</div>
      <span className="see-report">see report</span>
    </Card>
  );
};
export function Audits(props: IAuditsProps) {
  return (
    <Section>
      <AuditWrapper>
        <Title>Audits</Title>
        <Description>
          Lido has been audited by the industry-leaders in blockchain security.
        </Description>
        <List>
          {dataAudits.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </List>
      </AuditWrapper>
    </Section>
  );
}
