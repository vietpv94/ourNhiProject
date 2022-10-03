import * as React from 'react';
import { Card, Description, GrowingEcosystemWrapper, List, Title, ViewAllCard } from './style';
import { Section } from '../TheDAO/style';
import { DataGrowingEcosystem, DataEcosystem } from './data';

export interface IGrowingEcosystemProps {}

export const Item = (data: DataEcosystem) => {
  return (
    <Card>
      <div className="icon"> {data.icon}</div>
      <div className="content">
        <div className="title">{data.title}</div>
        <div className="description">{data.description}</div>
      </div>
    </Card>
  );
};

export const ViewAll = () => {
  return (
    <ViewAllCard>
      <div className="content">
        <div className="title">26</div>
        <div className="description">ecosystem applications</div>
      </div>
	  <div className='view-all'>View all</div>
    </ViewAllCard>
  );
};

export function GrowingEcosystem(props: IGrowingEcosystemProps) {
  return (
    <Section>
      <GrowingEcosystemWrapper>
        <Title>A growing Lido ecosystem</Title>
        <Description>
          Lido empowers stakers to put their staked assets to use. Explore apps
          and services integrated with Lido.
        </Description>
        <List>
          {DataGrowingEcosystem.map((item) => (
            <Item {...item} />
          ))}
          <ViewAll />
        </List>
      </GrowingEcosystemWrapper>
    </Section>
  );
}
