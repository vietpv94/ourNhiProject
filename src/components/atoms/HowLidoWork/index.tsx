import * as React from 'react';
import { Description, HowLidoWorkWrapper, List, Section, Title, Card } from './style';
import { DataHowLidoWork, dataHowLidoWork } from './data';

export interface IHowLidoWorkProps {
}

export const Item = (data: DataHowLidoWork) => {
	return (
		<Card>
			{data.icon}
			<Title>{data.name}</Title>
			<Description>{data.description}</Description>
		</Card>
	)

}
export function HowLidoWork (props: IHowLidoWorkProps) {
  return (
    <Section>
      <HowLidoWorkWrapper>
        <Title>How Lido works</Title>
        <Description>
          Lido builds state of the art liquid staking protocols to grow the
          staking economy
        </Description>
        <List>
          {dataHowLidoWork.map((item, index) => {
            return <Item key={index} {...item} />;
          })}
        </List>
      </HowLidoWorkWrapper>
    </Section>
  );
}
