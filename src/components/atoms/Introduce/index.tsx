import { Button } from "@Components/atoms/Button";
import * as React from "react";
import { Content, IntroWrapper, Main, Mask, Section, Socials } from "./style";
import sun from "@Assets/images/home/sun2.png";
import logo from "@Assets/images/home/logo-color.png";
import { TwitterIcon } from "../JoinCommunity/icon/twitter";
import { TelegramIcon } from "../JoinCommunity/icon/telegram";
import { DiscordIcon } from "../JoinCommunity/icon/discord";
import { GithubIcon } from "../JoinCommunity/icon/github";
import { breakpoints } from "@Utils/theme";
import { useMedia } from "react-use";

export interface IIntroduceProps {}

const ListSocial = [
  {
    name: "Twitter",
    icon: (
      <TwitterIcon
        color="#000"
        customStyle={{
          width: "24",
          height: "24",
        }}
      />
    ),
  },
  {
    name: "Telegram",
    icon: (
      <TelegramIcon
        color="#000"
        customStyle={{
          width: "24",
          height: "24",
        }}
      />
    ),
  },
  {
    name: "Discord",
    icon: (
      <DiscordIcon
        color="#000"
        customStyle={{
          width: "24",
          height: "24",
        }}
      />
    ),
  },
  {
    name: "Github",
    icon: (
      <GithubIcon
        color="#000"
        customStyle={{
          width: "24",
          height: "24",
        }}
      />
    ),
  },
];
export function Introduce(props: IIntroduceProps) {
  const isMobile = useMedia(breakpoints.md);
  return (
    <Section>
      <IntroWrapper>
        <Mask>
          <img className="sun" src={sun} alt="sun" />
          {!isMobile && <img className="logo" src={logo} alt="logo" />}
        </Mask>
        <Main>
          {isMobile && <img className="logo" src={logo} alt="logo" />}
          <Content>
            <div className="title">Liquidity for staked assets</div>
            <div className="description">
              Simplified and secure staking for digital assets
            </div>
            <Button
              customStyle="margin-top: 24px;
                width: 150px;"
              type="blue"
              text="Stake now"
            />
          </Content>
          <Socials>
            {ListSocial.map((item, index) => (
              <div key={`social-${index}`}>{item.icon}</div>
            ))}
          </Socials>
        </Main>
      </IntroWrapper>
    </Section>
  );
}
