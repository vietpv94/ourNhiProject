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
  { id: 1, image: one, link: "https://jumpcrypto.com/" },
  { id: 2, image: two, link: "https://p2p.org/" },
  { id: 3, image: three, link: "https://chorus.one/" },
  { id: 4, image: four, link: "https://stake.fish/" },
  { id: 5, image: five, link: "https://stakingfacilities.com/" },
  { id: 6, image: six, link: "https://blockscape.network/" },
  { id: 7, image: seven, link: "https://www.dsrvlabs.com/" },
  { id: 8, image: eight, link: "https://everstake.one/" },
  { id: 9, image: nine, link: "https://www.kiln.fi/" },
  { id: 10, image: ten, link: "https://www.rockx.com/" },
  { id: 11, image: eleven, link: "https://www.figment.io/" },
  { id: 12, image: twelve, link: "https://www.allnodes.com/" },
  { id: 13, image: thirteen, link: "https://blockdaemon.com/" },
  { id: 14, image: fourteen, link: "https://blockdaemon.com/" },
  { id: 15, image: fifteen, link: "https://stakin.com/home" },
  { id: 16, image: sixteen, link: "https://www.chainlayer.io/" },
  { id: 17, image: seventeen, link: "https://www.simply-vc.com.mt/" },
  { id: 18, image: eighteen, link: "https://www.bridgetowercapital.com/" },
  { id: 19, image: nineteen, link: "https://stakely.io/en" },
  { id: 20, image: twenty, link: "https://infstones.com/" },
  { id: 21, image: twentyone, link: "https://www.hashquark.io/#/" },
  { id: 22, image: twentytwo, link: "https://consensys.net/codefi/" },
  { id: 23, image: twentythree, link: "https://sigmaprime.io/" },
  { id: 24, image: twentyfour, link: "https://prysmaticlabs.com/" },
  { id: 25, image: twentyfive, link: "https://chainsafe.io/" },
  { id: 26, image: twentysix, link: "https://nethermind.io/" },
  { id: 27, image: twentyseven, link: "https://www.kukis-global.com/" },
  { id: 28, image: twentyeight, link: "https://www.cryptomanufaktur.io/" },
  { id: 29, image: twentynine, link: "https://rocklogic.at/" },
  { id: 30, image: thirty, link: "https://www.attestant.io/" },
];

export function Validators(props: IValidatorsProps) {
  return (
    <Section>
      <ValidatorsWrapper>
        <Title>Validators</Title>
        <Description>Explore validators that help grow Lido</Description>
        <List>
          {data.map((item) => (
            <div
              key={`validator-${item.id}`}
              className="image"
              onClick={() => window.open(item.link, "_blank")}
            >
              <img src={item.image} alt="validator" />
            </div>
          ))}
        </List>
      </ValidatorsWrapper>
    </Section>
  );
}
