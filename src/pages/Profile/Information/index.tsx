import { Button } from "@Components/atoms/Button";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { ClockIcon } from "@Components/atoms/icon/clock";
import { CloseIcon } from "@Components/atoms/icon/close";
import { EditIcon } from "@Components/atoms/icon/edit";
import { QRCodeIcon } from "@Components/atoms/icon/QR";
import { ToggleIcon } from "@Components/atoms/icon/toggle";
import { WarningIcon } from "@Components/atoms/icon/warning";
import { QRModal } from "@Components/atoms/InputImage/style";
import { Form } from "@Components/molecules/Form";
import { Input } from "@Components/molecules/Form/input";
import { RootState } from "@Redux/reducers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, ReviewTime, Title, UL, Wrapper, QR } from "./style";
import qrCode from "@Assets/images/profile/qrcode.png";
import { EyeIcon } from "@Components/atoms/icon/eye";
import { ChangePass } from "./changePass";
import { userServices } from "@Services/index";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-toastify";
import { enable2FA } from "@Redux/actions/accounts";
import React, { useMemo } from "react";
import { PendingIcon } from "@Components/atoms/icon/pending";
import { TickIcon } from "@Components/atoms/icon/tick";
import { loading, unloading } from "@Redux/actions/loading";

export interface IPersonalInformationProps {}
export interface IKycForm {
  fullName?: string;
  dateOfBirth?: string;
  phone?: string;
  fullAddress?: string;
  imageBack?: string;
  imageFront?: string;
}

export function PersonalInformation(props: IPersonalInformationProps) {
  const account = useSelector((state: RootState) => state.account);
  const is2FAEnabled = useSelector(
    (state: RootState) => state.account.is2FAEnabled
  );

  const dispatch = useDispatch();
  const [qr, setQr] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [kycForm, setKycForm] = useState<IKycForm>();
  const [changePass, setChangePass] = useState<boolean>(false);
  const [active2FA, setActive2FA] = useState<boolean>(false);
  const [activeKYC, setActiveKYC] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [copyState, copyToClipboard] = useCopyToClipboard();

  const { kycStatus } = useSelector((state: RootState) => state.account);
  const handleToggle = async () => {
    if (!is2FAEnabled) {
      setActive2FA(true);
      dispatch(loading());
      const { data } = await userServices.getQrCode2fa();
      setQr(data.qrCodeUrl);
      setSecret(data.secret);
      dispatch(unloading());
    }
  };
  const handleVerify = async () => {
    dispatch(loading());
    const { data } = await userServices.enable2FA({
      twoFACode: code,
    });
    dispatch(unloading());
    if (data) {
      setCode("");
      setActive2FA(false);
      dispatch(enable2FA());
      toast.info("2FA enabled");
    }
  };

  useEffect(() => {
    if (copyState.noUserInteraction && !copyState.error && copyState.value) {
      toast.success("copy success");
    }
  }, [copyState]);

  const submitKycData = async () => {
    if (kycForm) {
      const kycFormData = new FormData();
      kycFormData.append("fullName", kycForm.fullName || "");
      kycFormData.append("dateOfBirth", kycForm.dateOfBirth || "");
      kycFormData.append("fullAddress", kycForm.fullAddress || "");
      kycFormData.append("phone", kycForm.phone || "");
      kycFormData.append("imageFront", kycForm.imageFront || "");
      kycFormData.append("imageBack", kycForm.imageBack || "");
      dispatch(loading());
      const { data } = await userServices.sendKyc(kycFormData);
      dispatch(unloading());
      if (data) {
        setActiveKYC(false);
      }
    }
  };

  const renderKycStatus = useMemo(() => {
    switch (kycStatus) {
      case 0:
        return (
          <WarningIcon
            color="#FF9900"
            customStyle={{
              height: 12,
              width: 12,
            }}
          />
        );
      case 1:
        return (
          <PendingIcon
            customStyle={{
              height: 12,
              width: 12,
            }}
          />
        );
      case 2:
        return (
          <TickIcon
            customStyle={{
              height: 12,
              width: 12,
            }}
          />
        );
      default:
        return (
          <TickIcon
            customStyle={{
              height: 12,
              width: 12,
            }}
          />
        );
    }
  }, [kycStatus]);
  return (
    <Wrapper>
      <div className="title">Profile</div>
      <Form>
        <Input type="text" label="Your ID" value={account.userId} disabled />
        <Input type="email" label="Email" value={account.email} disabled />
        <Title>
          <span>General Account Settings</span>
        </Title>
        <Input type="email" label="Email" value={account.email} />
        <Input
          type="password"
          label="Password"
          placeholder={!changePass ? "********" : "Input current password"}
          disabled={!changePass}
          onChange={(e) => setPassword(e.target.value)}
          icon={
            <EditIcon
              onClick={() =>
                changePass ? setChangePass(false) : setChangePass(true)
              }
            />
          }
        />
        {changePass && (
          <ChangePass
            currentPass={password}
            onSuccess={() => {
              setPassword("");
              setChangePass(false);
            }}
          />
        )}
        <Title>
          <span>2FA Authenticator</span>
          <ToggleIcon onClick={() => handleToggle()} isToggle={active2FA} />
        </Title>
        {active2FA && (
          <>
            <UL>
              <li>
                Please note your Key down and keep it save. It will help you
                recover Google Authentication in case of losing device. <br />
              </li>
              <li>
                Enter Key in "Enter Passcode" or scan the QR code below on your
                Google Authentication app.
              </li>
            </UL>
            <Input
              type="text"
              label="Product Key"
              value={secret}
              disabled
              icon={
                <QR>
                  <span>QR Code</span>
                  <QRCodeIcon onClick={() => setShowQRCode(!showQRCode)} />
                  {showQRCode && (
                    <QRModal>
                      {qr && (
                        <>
                          <CloseIcon
                            color="#00A3FF"
                            type="outline"
                            onClick={() => setShowQRCode(false)}
                          />
                          <div className="title">Scan and send</div>
                          <img
                            className="qr-code"
                            src={`${qr}`}
                            alt="qr-code-img-lido"
                          />
                          <div className="save">Save QR</div>
                        </>
                      )}
                    </QRModal>
                  )}
                </QR>
              }
            >
              <Button
                customStyle={"height: 40px;"}
                type="blue"
                text="Copy"
                onClick={() => {
                  copyToClipboard(secret);
                }}
              />
            </Input>
            <Input
              type="text"
              label="Verify code"
              placeholder="OTP code"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            ></Input>
            <Button
              type="blue"
              text="Activate 2FA"
              customStyle={"width: 100%;"}
              onClick={() => handleVerify()}
            />
          </>
        )}
        <Title>
          <span>
            KYC
            {renderKycStatus}
          </span>
          {(kycStatus === 0 || kycStatus === 3) && (
            <ArrowIcon
              color="#00A3FF"
              direction={activeKYC ? "up" : "down"}
              style="solid"
              onClick={() => setActiveKYC(!activeKYC)}
            />
          )}
        </Title>
        {activeKYC && (kycStatus === 0 || kycStatus === 3) && (
          <>
            <ReviewTime>
              <ClockIcon />
              <span>Review time: 2 days</span>
            </ReviewTime>
            <Flex>
              <Input
                type="text"
                label="Full Name"
                onChange={(e) => {
                  setKycForm({
                    ...kycForm,
                    fullName: e.target.value,
                  });
                }}
              />
              <Input
                type="text"
                label="Date of Birth"
                placeholder="YYYY/MM/DD"
                onChange={(e) => {
                  setKycForm({
                    ...kycForm,
                    dateOfBirth: e.target.value,
                  });
                }}
              />
            </Flex>
            <Input
              label="Full Address"
              type="text"
              onChange={(e) => {
                setKycForm({
                  ...kycForm,
                  fullAddress: e.target.value,
                });
              }}
            />
            <Input
              type="text"
              label="Phone Number"
              onChange={(e) => {
                setKycForm({
                  ...kycForm,
                  phone: e.target.value,
                });
              }}
            />
            <Input
              type="file"
              label="ID identify card"
              onChange={(v) => {
                setKycForm({
                  ...kycForm,
                  ...v,
                });
              }}
            />
            <Button
              text="Confirm"
              type="blue"
              customStyle={"width: 100%;"}
              onClick={submitKycData}
            />
          </>
        )}
      </Form>
    </Wrapper>
  );
}
