import sol from "@Assets/images/molecules/token/sol.png";
import { Button } from "@Components/atoms/Button";
import { CloseIcon } from "@Components/atoms/icon/close";
import { setModal } from "@Redux/actions/modal";
import transactionServices from "@Services/transaction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Input, InputWrapper, Title, WithdrawWrapper } from "./style";

export interface IWithdrawProps {}

export function Withdraw(props: IWithdrawProps) {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<number>(1); // SOL=2, USDT=1
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleConfirm = async () => {
    const { data, errorMsg } = await transactionServices.requestWithdraw({
      address,
      amount,
      currency
    });
    if (data) {
      dispatch(
        setModal({
          modal: "withdraw-successful",
          data: {
            address,
            amount,
            currency
          }
        })
      );
    } else {
      return toast.error(errorMsg);
    }
  };
  return (
    <WithdrawWrapper>
      <Title>Withdraw</Title>
      <InputWrapper>
        <label>Amount</label>{" "}
        <Input>
          <img src={sol} alt="sol-token" className="icon" />
          <input
            type="text"
            placeholder="0.00"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </Input>
      </InputWrapper>
      <InputWrapper>
        <label>Your wallet</label>
        <Input>
          <input
            type="text"
            placeholder="DX..."
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <CloseIcon type="outline" color="#FF476A" />
        </Input>
      </InputWrapper>
      <div className="btn">
        <Button text="Withdraw" type="blue" onClick={handleConfirm} />
      </div>
    </WithdrawWrapper>
  );
}
