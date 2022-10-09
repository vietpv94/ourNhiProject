import { dataNavigation, DataItemNav } from "../Header/data";
import { Logo } from "../Header/logo";
import { Col, CopyRight, FooterWrapper, List, Section } from "./style";

export interface IFooterProps {}

export const Item = (data: DataItemNav) => {
  return (
    <Col>
      <div className="title">{data.name}</div>
      <ul>
        {data.children?.map((item, index) => (
          <li key={`footer-${index}`}>
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
          {data.map((item, index) => (
            <Item {...item} key={`footer-list-${index}`} />
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
