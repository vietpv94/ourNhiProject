import { Button } from "@Components/atoms/Button";
import { EyeIcon } from "@Components/atoms/icon/eye";
import { Input } from "@Components/molecules/Form/input";
import React, { useState } from "react";

export interface IChangePassProps {}

export function ChangePass(props: IChangePassProps) {
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleCheckPass = async () => {};
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
