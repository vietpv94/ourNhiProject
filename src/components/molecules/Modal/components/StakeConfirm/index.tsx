import solToken from "@Assets/images/molecules/card/sol-token.png";
import { Button } from "@Components/Button";
import { setModal } from "@Redux/actions/modal";
import { useDispatch } from "react-redux";
import { Content, Item, Logo, Wrapper } from "./style";
export interface IStakeConFirmModalProps {}

export function StakeConFirmModal(props: IStakeConFirmModalProps) {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch(setModal({ modal: "stake-successful" }));
  };
  return (
    <Wrapper>
      <Logo src={solToken} alt="sol-token" />
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
      <Button
        onClick={handleConfirm}
        customStyle={
          "height: 40px; width: 50%; font-weight: 600;font-size: 14px;"
        }
        text="Confirm"
        type="blue"
      />
    </Wrapper>
  );
}
