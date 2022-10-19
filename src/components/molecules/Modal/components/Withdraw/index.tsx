import sol from "@Assets/images/molecules/token/sol.png";
import { Button } from "@Components/atoms/Button";
import { CloseIcon } from "@Components/atoms/icon/close";
import { setModal } from "@Redux/actions/modal";
import { useDispatch } from "react-redux";
import { Input, InputWrapper, Title, WithdrawWrapper } from "./style";

export interface IWithdrawProps {}

export function Withdraw(props: IWithdrawProps) {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch(
      setModal({
        modal: "widthdraw-successful",
      })
    );
  };
  return (
    <WithdrawWrapper>
      <Title>Withdraw</Title>
      <InputWrapper>
        <label>Amount</label>{" "}
        <Input>
          <img src={sol} alt="sol-token" className="icon" />
          <input type="text" placeholder="0.00" />
        </Input>
      </InputWrapper>
      <InputWrapper>
        <label>Your wallet</label>
        <Input>
          <input type="text" placeholder="DX..." />
          <CloseIcon type="outline" color="#FF476A" />
        </Input>
      </InputWrapper>
      <div className="btn">
        <Button text="Withdraw" type="blue" onClick={handleConfirm} />
      </div>
    </WithdrawWrapper>
  );
}
