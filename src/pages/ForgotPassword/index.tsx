import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconClose from "@Assets/images/close-circle.png";
import IconHide from "@Assets/images/eye-slash.png";
import IconShow from "@Assets/images/eye.png";
import IconTele from "@Assets/images/icon-telegram-circle.png";
import IconTwit from "@Assets/images/icon-twit.png";
import { Button, Details, Form, Input } from "@Components/atoms/Form";
import { UserLayout } from "@Components/molecules/UserLayout";
import { toast } from "react-toastify";
import { userServices } from "@Services/index";
import { Link, Social } from "./components";

export const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);
  const [time, setTime] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accessToken, setAccessToken] = useState("");

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
  const handleGetCode = async () => {
    if (!userName) {
      return toast.warn("Please enter your email");
    }
    setCountdown();
    userServices
      .resetPassword({
        email: userName
      })
      .then((response: any) => {
        if (!response.success) {
          return toast.error(response.message);
        }

        return toast.info("Check your email to get verification code");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };

  const handleNext = () => {
    if (!code) {
      return toast.error("Please enter your code");
    }
    if (!userName) {
      return toast.error("Please enter your email");
    }
    userServices
      .verifyOTPResetPassword({ email: userName, otpCode: code })
      .then((res) => {
        if (res.success) {
          setAccessToken(res.data.token);
          setStep(2);
        } else {
          return toast.error(res.message);
        }
      })
      .catch((err) => {});
  };

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      return toast.error("Please enter your password");
    }
    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    }
    userServices
      .verifyResetPassword({
        email: userName,
        verifyToken: accessToken,
        password
      })
      .then((res) => {
        if (res.success) {
          setStep(3);
        } else {
          return toast.error(res.message);
        }
      });
  };
  if (step === 1) {
    return (
      <UserLayout heading={"Forgot password"}>
        <Form>
          <div className="label">Mail</div>
          <Input>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="icon">
              <img
                src={IconClose}
                alt="Clear"
                onClick={() => setUserName("")}
              />
            </div>
          </Input>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column"
            }}
          >
            <Button onClick={() => handleNext()}>Next</Button>
            <Link to="/sign-up">
              Don’t have an account? <span>Sign up</span>
            </Link>
          </div>
        </Form>
      </UserLayout>
    );
  } else if (step === 2) {
    return (
      <UserLayout heading={"Reset Your Password"}>
        <Form>
          <div className="label">New Password</div>
          <Input>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon">
              <img
                src={showPassword ? IconShow : IconHide}
                alt="Hide"
                onClick={() =>
                  showPassword ? setShowPassword(false) : setShowPassword(true)
                }
              />
            </div>
          </Input>
          <div className="label">Confirm Password</div>
          <Input>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="icon">
              <img
                src={showConfirmPassword ? IconHide : IconShow}
                alt="Hide"
                onClick={() =>
                  showPassword
                    ? setShowConfirmPassword(false)
                    : setShowConfirmPassword(true)
                }
              />
            </div>
          </Input>
          <Button onClick={() => handleSubmit()}>Next</Button>
        </Form>
        <Link to="/sign-up">
          Don’t have an account? <span>Sign up</span>
        </Link>
      </UserLayout>
    );
  } else if (step === 3) {
    return (
      <UserLayout heading={`Password Changed`}>
        <Details
          style={{
            fontSize: "16px"
          }}
        >
          Please log in with the new password.
        </Details>
        <Button
          style={{
            width: "70%"
          }}
        >
          <NavLink to="/login">Log In</NavLink>
        </Button>
        <Social gap="34px">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={IconTwit} alt="Twitter" />
          </a>
          <a href="https://t.me/=" target="_blank" rel="noreferrer">
            <img src={IconTele} alt="Telegram" />
          </a>
        </Social>
      </UserLayout>
    );
  } else {
    return <></>;
  }
};

export default ForgotPassword;
