import solToken from "@Assets/images/molecules/card/sol-token.png";
import { Button } from "@Components/atoms/Button";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import { setModal } from "@Redux/actions/modal";
import { RootState } from "@Redux/reducers";
import { stakingServices } from "@Services/index";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Content, Item, Logo, Wrapper } from "./style";

export interface IStakeConFirmModalProps {
  selectedPack?: ICardStakingData;
}

export function StakeConFirmModal(props: IStakeConFirmModalProps) {
  const dispatch = useDispatch();
  const { selectedPack } = props;
  const handleConfirm = () => {
    if (selectedPack) {
      stakingServices
        .doStake({
          packageId: Number(selectedPack?.id),
          stakeValue: Number(selectedPack?.value),
        })
        .then((response: any) => {
          if (response.success) {
            dispatch(
              setModal({
                modal: "stake-successful",
                data: {
                  successStakingPack: {
                    ...response.data,
                    duration: selectedPack.duration,
                  },
                },
              })
            );
          } else {
            toast.error(response.message);
          }
        });
    }
  };
  return (
    <Wrapper>
      <Logo src={solToken} alt="sol-token" />
      <Content>
        <Item>
          <span className="label">Subscription Package:</span>
          <span className="value">{`$${Number(selectedPack?.value || 0).toFixed(
            2
          )}`}</span>
        </Item>
        <Item>
          <span className="label">Duration (Month):</span>
          <span className="value">
            {Number(selectedPack?.duration || 0) / (60 * 60 * 24 * 30)}
          </span>
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
