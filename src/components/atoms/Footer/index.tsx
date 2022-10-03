import { dataNavigation, ItemNav } from "@Components/Header/data";
import { Logo } from "@Components/Header/logo";
import * as React from "react";
import { Col, CopyRight, FooterWrapper, List, Section } from "./style";

export interface IFooterProps {}

export const Item = (data: ItemNav) => {
  return (
    <Col>
      <div className="title">{data.name}</div>
      <ul>
        {data.children?.map((item) => (
          <li>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </Col>
  );
};
export function Footer(props: IFooterProps) {
  const data = dataNavigation;
  return (
    <Section>
      <FooterWrapper>
        <List>
          {data.map((item) => (
            <Item {...item} />
          ))}
        </List>
      </FooterWrapper>
      <CopyRight>
        <Logo />
        <div className="text">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </CopyRight>
    </Section>
  );
}
