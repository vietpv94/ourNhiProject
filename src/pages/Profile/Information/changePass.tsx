import { Button } from "@Components/atoms/Button";
import { EyeIcon } from "@Components/atoms/icon/eye";
import { Input } from "@Components/molecules/Form/input";
import { loading, unloading } from "@Redux/actions/loading";
import { userServices } from "@Services/index";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export interface IChangePassProps {
  currentPass: string;
  onSuccess: () => void;
}

export function ChangePass(props: IChangePassProps) {
  const [changePassword, setChangePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const handleCheckPass = async () => {
    if (changePassword !== confirmPassword) {
      return toast.error("Password and Confirm Password must match");
    }
    dispatch(loading());
    const res = await userServices.changePassword({
      oldPassword: props.currentPass,
      password: confirmPassword,
    });
    dispatch(unloading());
    if (res.success) {
      toast.success("Password changed successfully");
      setChangePassword("");
      setConfirmPassword("");
      props.onSuccess();
    } else {
      return toast.error(res.message);
    }
  };

  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  return (
    <>
      <Input
        label="Enter new password"
        type={showNewPass ? "text" : "password"}
        placeholder="********"
        onChange={(e) => setChangePassword(e.target.value)}
        value={changePassword}
        icon={
          <EyeIcon
            type={showNewPass ? "default" : "slash"}
            onClick={() => setShowNewPass(!showNewPass)}
          />
        }
      />
      <Input
        label="Confirm your password"
        type={showConfirmPass ? "text" : "password"}
        placeholder="********"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        icon={
          <EyeIcon
            type={showConfirmPass ? "default" : "slash"}
            onClick={() => {
              setShowConfirmPass(!showConfirmPass);
            }}
          />
        }
      />
      <Button
        type="blue"
        text="Save Change"
        customStyle={"width: 100%;"}
        onClick={() => handleCheckPass()}
      />
    </>
  );
}
