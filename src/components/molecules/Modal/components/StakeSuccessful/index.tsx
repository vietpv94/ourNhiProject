import successful from "@Assets/images/Gif/successful.gif";
import { TimeStepper } from "@Components/molecules/TimeStepper";
import {
  APR,
  Content,
  Item,
  Logo,
  StakeSuccessfulWrapper,
  Title,
} from "./style";
export interface IStakeSuccessfulProps {}

const data = [
  {
    label: "Stake Date:",
    value: "2022-10-04 11:33",
  },
  {
    label: "Value Date",
    value: "2022-10-05 07:00",
  },
  {
    label: "Interest Distribution Date",
    value: "2022-10-05 07:00",
  },
];

export function StakeSuccessful(props: IStakeSuccessfulProps) {
  return (
    <StakeSuccessfulWrapper>
      <Logo src={successful} alt="successful" />
      <Title>Successful</Title>
      <Content>
        <Item>
          <span className="label">Subscription Package:</span>
          <span className="value">$300</span>
        </Item>
        <Item>
          <span className="label">Duration (Month):</span>
          <span className="value">18</span>
        </Item>
      </Content>
      <TimeStepper data={data} />
      <APR>
        <span className="label">Est. APR</span>
        <span className="value">1.39%</span>
      </APR>
    </StakeSuccessfulWrapper>
  );
}
