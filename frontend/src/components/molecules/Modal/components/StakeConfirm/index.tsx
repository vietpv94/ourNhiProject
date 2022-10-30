import solToken from "@Assets/images/molecules/card/sol-token.png";
import { Button } from "@Components/atoms/Button";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import { loading, unloading } from "@Redux/actions/loading";
import { setModal } from "@Redux/actions/modal";
import { RootState } from "@Redux/reducers";
import { stakingServices } from "@Services/index";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Message, Transaction } from "@solana/web3.js";
import currency from "currency.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Content, Item, Logo, Wrapper } from "./style";

export interface IStakeConFirmModalProps {
  selectedPack?: ICardStakingData;
  type?: number;
}

export function StakeConFirmModal(props: IStakeConFirmModalProps) {
  const { connected, publicKey, signTransaction } = useWallet();
  const { visible, setVisible } = useWalletModal();
  const [solPrice, setSolPrice] = useState(0);

  const dispatch = useDispatch();
  const { selectedPack, type } = props;
  const handleConfirm = async () => {
    if (selectedPack) {
      if (!publicKey) {
        setVisible(!visible);
        return toast.warning("Please connect with a wallet to continue!");
      }
      if (type === 1) {
        dispatch(loading());
        const { data } = await stakingServices.initStaking({
          packageId: Number(selectedPack?.id),
          address: publicKey.toBase58()
        });

        if (data.needSignTx) {
          const recoverRealData = Buffer.from(data.txBase64, "base64");
          const recoverTx = Transaction.populate(Message.from(recoverRealData));
          if (!recoverTx) {
            dispatch(unloading());
            return;
          }
          if (!signTransaction) {
            dispatch(unloading());
            setVisible(!visible);
            return toast.error(
              "Wallet is not connected, please connect with your wallet and try again"
            );
          }

          //@ts-ignore
          const signedTx = await signTransaction(recoverTx);
          const signature = signedTx.signature;
          stakingServices
            .doStake({
              packageId: Number(selectedPack?.id),
              signature: Array.from(signature as Iterable<number>),
              depositId: data.depositId,
              address: publicKey.toBase58()
            })
            .then((response: any) => {
              dispatch(unloading());
              if (response.success) {
                dispatch(
                  setModal({
                    modal: "stake-successful",
                    data: {
                      successStakingPack: {
                        ...response.data,
                        duration: selectedPack.duration
                      }
                    }
                  })
                );
              } else {
                dispatch(unloading());
                toast.error(response.message);
              }
            });
        } else {
          stakingServices
            .doStake({
              packageId: Number(selectedPack?.id),
              stakeValue: Number(selectedPack?.value)
            })
            .then((response: any) => {
              if (response.success) {
                dispatch(unloading());
                dispatch(
                  setModal({
                    modal: "stake-successful",
                    data: {
                      successStakingPack: {
                        ...response.data,
                        duration: selectedPack.duration
                      }
                    }
                  })
                );
              } else {
                dispatch(unloading());
                toast.error(response.message);
              }
            });
        }
      } else {
        dispatch(loading());
        const { data } = await stakingServices.initStakingDefi({
          stakeValue: Number(selectedPack?.value),
          duration: selectedPack?.duration,
          currency: selectedPack.currency || 1,
          address: publicKey.toBase58()
        });

        if (data.needSignTx) {
          const recoverRealData = Buffer.from(data.txBase64, "base64");
          const recoverTx = Transaction.populate(Message.from(recoverRealData));
          if (!recoverTx) {
            dispatch(unloading());
            return;
          }
          if (!signTransaction) {
            dispatch(unloading());
            setVisible(!visible);
            return toast.error(
              "Wallet is not connected, please connect with your wallet and try again"
            );
          }

          //@ts-ignore
          const signedTx = await signTransaction(recoverTx);
          const signature = signedTx.signature;
          stakingServices
            .doStakeDefi({
              stakeValue: Number(selectedPack?.value),
              signature: Array.from(signature as Iterable<number>),
              depositId: data.depositId,
              address: publicKey.toBase58(),
              currency: selectedPack.currency || 1,
              duration: selectedPack?.duration
            })
            .then((response: any) => {
              if (response.success) {
                dispatch(unloading());
                dispatch(
                  setModal({
                    modal: "stake-successful",
                    data: {
                      successStakingPack: {
                        ...response.data,
                        duration: selectedPack.duration
                      }
                    }
                  })
                );
              } else {
                dispatch(unloading());
                toast.error(response.message);
              }
            });
        } else {
          stakingServices
            .doStakeDefi({
              stakeValue: Number(selectedPack?.value),
              depositId: data.depositId,
              currency: selectedPack?.currency || 1,
              duration: selectedPack?.duration
            })
            .then((response: any) => {
              if (response.success) {
                dispatch(unloading());
                dispatch(
                  setModal({
                    modal: "stake-successful",
                    data: {
                      successStakingPack: {
                        ...response.data,
                        duration: selectedPack.duration
                      }
                    }
                  })
                );
              } else {
                dispatch(unloading());
                toast.error(response.message);
              }
            });
        }
      }
    }
  };

  const loadSOLPrice = async () => {
    const { data } = await stakingServices.getSolPrice();
    setSolPrice(data.solPrice);
  };

  useEffect(() => {
    loadSOLPrice();
  }, []);

  return (
    <Wrapper>
      <Logo src={solToken} alt="sol-token" />
      <Content>
        <Item>
          <span className="label">Subscription Package:</span>
          <span className="value">
            {selectedPack?.currency === 1
              ? `${currency(selectedPack?.value || 0, {
                  symbol: "$",
                  precision: 0
                }).format()} `
              : `${selectedPack?.value} SOL `}
          </span>
        </Item>

        <Item>
          <span className="label">{selectedPack?.currency === 1? 'SOL': 'USDT'} Value:</span>
          <span className="value">
            {selectedPack?.currency === 1
              ? `${Number(selectedPack?.value / solPrice).toFixed(2)} SOL `
              : `${currency((selectedPack?.value || 0) * solPrice, {
                  symbol: "$",
                  precision: 2
                }).format()} `}
          </span>
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
