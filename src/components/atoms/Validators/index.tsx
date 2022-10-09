import * as React from "react";
import one from "@Assets/images/home/validators/1.png";
import two from "@Assets/images/home/validators/2.png";
import three from "@Assets/images/home/validators/3.png";
import four from "@Assets/images/home/validators/4.png";
import five from "@Assets/images/home/validators/5.png";
import six from "@Assets/images/home/validators/6.png";
import seven from "@Assets/images/home/validators/7.png";
import eight from "@Assets/images/home/validators/8.png";
import nine from "@Assets/images/home/validators/9.png";
import ten from "@Assets/images/home/validators/10.png";
import eleven from "@Assets/images/home/validators/11.png";
import twelve from "@Assets/images/home/validators/12.png";
import thirteen from "@Assets/images/home/validators/13.png";
import fourteen from "@Assets/images/home/validators/14.png";
import fifteen from "@Assets/images/home/validators/15.png";
import sixteen from "@Assets/images/home/validators/16.png";
import seventeen from "@Assets/images/home/validators/17.png";
import eighteen from "@Assets/images/home/validators/18.png";
import nineteen from "@Assets/images/home/validators/19.png";
import twenty from "@Assets/images/home/validators/20.png";
import twentyone from "@Assets/images/home/validators/21.png";
import twentytwo from "@Assets/images/home/validators/22.png";
import twentythree from "@Assets/images/home/validators/23.png";
import twentyfour from "@Assets/images/home/validators/24.png";
import twentyfive from "@Assets/images/home/validators/25.png";
import twentysix from "@Assets/images/home/validators/26.png";
import twentyseven from "@Assets/images/home/validators/27.png";
import twentyeight from "@Assets/images/home/validators/28.png";
import twentynine from "@Assets/images/home/validators/29.png";
import thirty from "@Assets/images/home/validators/30.png";

import { ValidatorsWrapper, Section, Title, Description, List } from "./style";

export interface IValidatorsProps {}

const data = [
  { id: 1, image: one },
  { id: 2, image: two },
  { id: 3, image: three },
  { id: 4, image: four },
  { id: 5, image: five },
  { id: 6, image: six },
  { id: 7, image: seven },
  { id: 8, image: eight },
  { id: 9, image: nine },
  { id: 10, image: ten },
  { id: 11, image: eleven },
  { id: 12, image: twelve },
  { id: 13, image: thirteen },
  { id: 14, image: fourteen },
  { id: 15, image: fifteen },
  { id: 16, image: sixteen },
  { id: 17, image: seventeen },
  { id: 18, image: eighteen },
  { id: 19, image: nineteen },
  { id: 20, image: twenty },
  { id: 21, image: twentyone },
  { id: 22, image: twentytwo },
  { id: 23, image: twentythree },
  { id: 24, image: twentyfour },
  { id: 25, image: twentyfive },
  { id: 26, image: twentysix },
  { id: 27, image: twentyseven },
  { id: 28, image: twentyeight },
  { id: 29, image: twentynine },
  { id: 30, image: thirty },
];

export function Validators(props: IValidatorsProps) {
  return (
    <Section>
      <ValidatorsWrapper>
        <Title>Validators</Title>
        <Description>Explore validators that help grow Lido</Description>
        <List>
          {data.map((item) => (
            <div key={`validator-${item.id}`} className="image">
              <img src={item.image} alt="validator" />
            </div>
          ))}
        </List>
      </ValidatorsWrapper>
    </Section>
  );
}
