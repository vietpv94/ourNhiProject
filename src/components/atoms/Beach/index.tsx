import * as React from "react";
import { BeachWrapper, Item, Plant, Section } from "./style";
import plant1 from "@Assets/images/home/plant-1.png";
import plant2 from "@Assets/images/home/plant-2.png";
export interface IBeachProps {
  data: { title: string; value: string }[];
}

export function Beach({ data }: IBeachProps) {
  return (
    <Section>
      <Plant>
        <img src={plant1} alt="plant 1" />
        <img src={plant2} alt="plant 2" />
      </Plant>
      <BeachWrapper>
        {data.map((item, index) => {
          return (
            <Item key={`beach-${index}`}>
              <p className="title">{item.title}</p>
              <p className="value">{item.value}</p>
            </Item>
          );
        })}
      </BeachWrapper>
    </Section>
  );
}
