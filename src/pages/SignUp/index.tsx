import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { useMedia } from "react-use";
import IconClose from "@Assets/images/close-circle.png";
import IconHide from "@Assets/images/eye-slash.png";
import IconShow from "@Assets/images/eye.png";
import IconChecked from "@Assets/images/icon-checked.png";
import IconTele from "@Assets/images/icon-telegram-circle.png";
import IconTwit from "@Assets/images/icon-twit.png";
import IconUncheck from "@Assets/images/icon-uncheck.png";
import { Button } from "@Components/atoms/Form";
import { toast } from "react-toastify";
import {
  Button as FormButton,
  Checkbox,
  Details,
  Form,
  Heading,
  Input,
  Select,
} from "@Components/atoms/Form";
import { Steps } from "@Components/molecules/Steps";
import { UserLayout } from "@Components/molecules/UserLayout";
import { authServices, userServices } from "@Services/index";
import {
  Options,
  Item,
  StyledCheckbox,
  Social,
  ButtonGroup,
} from "./components";
import { breakpoints } from "@Utils/theme";
import { Header } from "@Components/molecules/HeaderHomePage";

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [check, setCheck] = useState(false); // checkbox
  const [email, setEmail] = useState("vietpv94@gmail.com");
  const [password, setPassword] = useState("10041994");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [ref, setRef] = useState("");
  const [time, setTime] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const isMobile = useMedia(breakpoints.sm);
  useEffect(() => {
    if (search.get("ref")) {
      setRef(search.get("ref") || "admin");
    }
  }, [search]);
  const handleSignUp = () => {
    return authServices.register({
      email: email,
      password: password,
      refCode: ref,
    });
  };

  const handleGetCode = async () => {
    setCountdown();
    userServices
      .getVerifyEmail({
        email: email,
      })
      .then((response: any) => {
        if (!response.success) {
          return toast.error(response.message);
        }
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };
  const handleVerifyCode = async () => {
    userServices
      .verifyCode({
        email: email,
        verifyToken: code,
      })
      .then((response: any) => {
        if (response.success) {
          handleSignUp().then((signResponse: any) => {
            if (signResponse.success) {
              setStep(3);
            } else {
              return toast.error(signResponse.message);
            }
          });
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: Error) => {
        toast.error(err.message);
      });
  };

  const setCountdown = () => {
    setShowCountdown(true);
    let seconds = 30;
    setTime(seconds);
    const count = setInterval(() => {
      seconds -= 1;
      if (seconds < 10) setTime(seconds);
      else setTime(seconds);
      if (seconds < 0) {
        clearInterval(count);
        setShowCountdown(false);
      }
    }, 1000);
  };
  if (step === 3) {
    return (
      <UserLayout heading={`Congratulation! \n Your account has been created.`}>
        <ButtonGroup>
          <Button>
            <NavLink to="/login">Join to invest </NavLink>
          </Button>
        </ButtonGroup>
        <Social>
          <a href="https://twitter.com/" target="_blank">
            <img src={IconTwit} alt="Twitter" />
          </a>
          <a href="https://t.me/" target="_blank">
            <img src={IconTele} alt="Telegram" />
          </a>
        </Social>
      </UserLayout>
    );
  } else
    return (
      <UserLayout heading={"Sign Up"}>
        {step === 1 && (
          <Options>
            <Form>
              <div className="label">Email</div>
              <Input>
                <input
                  type="text"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="icon">
                  <img
                    src={IconClose}
                    alt="Clear"
                    onClick={() => setEmail("")}
                  />
                </div>
              </Input>
              <div className="label">Password</div>
              <Input>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="icon">
                  <img
                    src={showPassword ? IconHide : IconShow}
                    alt="Hide"
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : setShowPassword(true)
                    }
                  />
                  <img
                    src={IconClose}
                    alt="Clear"
                    onClick={() => setPassword("")}
                  />
                </div>
              </Input>
              <div className="label">Referral ID (Optional)</div>
              <Input>
                <input
                  type="text"
                  placeholder="Referral ID"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                />

                <div className="icon">
                  <img src={IconClose} alt="Clear" />
                </div>
              </Input>
              <StyledCheckbox>
                <img
                  src={check ? IconChecked : IconUncheck}
                  onClick={() => setCheck(!check)}
                  alt="Uncheck"
                />
                <div className="content">
                  <ol>
                    <li>1. I agree to receive update emails from us.</li>
                    <li>2. I agree to share data for marketing purposes</li>
                  </ol>
                </div>
              </StyledCheckbox>
              <FormButton
                onClick={() => {
                  if (!email || !password) {
                    return toast.error(
                      `You haven't filled in all information.`
                    );
                  }
                  if (!check) {
                    return toast.error(
                      "You haven't agreed to Terms & Conditions."
                    );
                  }

                  setStep(2);
                }}
              >
                Next
              </FormButton>
            </Form>
          </Options>
        )}
        {step === 2 && (
          <Options>
            <Form>
              <Details>
                Please enter the 6-digit verification code that was sent to
                &nbsp; <br />
                {email}. The code is valid for 30 minutes.
              </Details>
              <div className="label">Enter Verification Code</div>
              <Input>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                {showCountdown ? (
                  <div className="icon">{"00:" + time}</div>
                ) : (
                  <div className="icon" onClick={() => handleGetCode()}>
                    Get Code
                  </div>
                )}
              </Input>
              <FormButton
                onClick={() => {
                  if (!code) {
                    toast.error("You haven't entered the verified code.");
                  }
                  handleVerifyCode();
                }}
              >
                Submit
              </FormButton>
            </Form>
          </Options>
        )}
      </UserLayout>
    );
};

export default SignUp;
