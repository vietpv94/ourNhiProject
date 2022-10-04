import * as React from "react";
import { BeachWrapper, Item, Plant, Section } from "./style";
import plant1 from "@Assets/images/home/plant-1.png";
import plant2 from "@Assets/images/home/plant-2.png";
export interface IBeachProps {}

export const data = [
  {
    title: "Total staking assets",
    value: "$5,954,022,468",
  },
  {
    title: "Total rewards paid",
    value: "$192,807,972",
  },
  {
    title: "Stakers",
    value: "193,721",
  },
];
export function Beach(props: IBeachProps) {
  return (
    <Section>
      <Plant>
        <img src={plant1} alt="plant 1" />
        <img src={plant2} alt="plant 2" />
      </Plant>
      <BeachWrapper>
        {data.map((item, index) => {
          return (
            <Item key={index}>
              <p className="title">{item.title}</p>
              <p className="value">{item.value}</p>
            </Item>
          );
        })}
      </BeachWrapper>
    </Section>
  );
}
