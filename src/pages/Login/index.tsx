import { RootState } from "@Redux/reducers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import IconClose from "@Assets/images/close-circle.png";
import IconHide from "@Assets/images/eye-slash.png";
import IconShow from "@Assets/images/eye.png";
import { Button, Form, Input } from "@Components/atoms/Form";
import Modal from "@Components/atoms/modal";
import { UserLayout } from "@Components/molecules/UserLayout";
import { toast } from "react-toastify";
import { loginRequest, loginSuccess } from "@Redux/actions/accounts";
import { authServices, sessionServices, userServices } from "@Services/index";
import { Link, VerifyModal } from "./components";
import { validateEmail } from "@Pages/SignUp";

interface ILoginProps {
  children?: React.ReactNode;
}

export const Login = ({ children }: ILoginProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { is2FAEnabled, userId, isLoggedIn } = useSelector(
    (state: RootState) => state.account
  );

  const handleSubmit = async () => {
    if (!validateEmail(userName) || userName === "") {
      return toast.error("email is invalid");
    }
    const { data, message } = await authServices.check2FA({ email: userName });
    if (!data) {
      const message = document.getElementById("wrong-email-pass");
      message?.classList.add("active");
      return;
    }

    const { enable2fa } = data;

    if (enable2fa) {
      setShowModal(true);
    } else {
      dispatch(loginRequest({ email: userName, password, remember: false }));
    }
  };
  const handleVerify = async () => {
    dispatch(
      loginRequest({
        email: userName,
        password,
        remember: false,
        twoFaCode: code
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/stake");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      setShowModal(false);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (is2FAEnabled) {
      setShowModal(true);
    }
  }, [is2FAEnabled]);

  const changeInput = () => {
    const message = document.getElementById("wrong-email-pass");
    message?.classList.remove("active");
  };
  return (
    <UserLayout heading={"Login"}>
      <Form>
        <div className="label">Mail</div>
        <Input>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              changeInput();
            }}
          />
          <div className="icon">
            <div
              onClick={() => {
                setUserName("");
                changeInput();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 1.66675C5.40841 1.66675 1.66675 5.40841 1.66675 10.0001C1.66675 14.5917 5.40841 18.3334 10.0001 18.3334C14.5917 18.3334 18.3334 14.5917 18.3334 10.0001C18.3334 5.40841 14.5917 1.66675 10.0001 1.66675ZM12.8001 11.9167C13.0417 12.1584 13.0417 12.5584 12.8001 12.8001C12.6751 12.9251 12.5167 12.9834 12.3584 12.9834C12.2001 12.9834 12.0417 12.9251 11.9167 12.8001L10.0001 10.8834L8.08342 12.8001C7.95842 12.9251 7.80008 12.9834 7.64175 12.9834C7.48342 12.9834 7.32508 12.9251 7.20008 12.8001C6.95842 12.5584 6.95842 12.1584 7.20008 11.9167L9.11675 10.0001L7.20008 8.08342C6.95842 7.84175 6.95842 7.44175 7.20008 7.20008C7.44175 6.95842 7.84175 6.95842 8.08342 7.20008L10.0001 9.11675L11.9167 7.20008C12.1584 6.95842 12.5584 6.95842 12.8001 7.20008C13.0417 7.44175 13.0417 7.84175 12.8001 8.08342L10.8834 10.0001L12.8001 11.9167Z"
                  fill="#7B7B7B"
                />
              </svg>
            </div>
          </div>
        </Input>
        <div className="label">Password</div>
        <Input>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              changeInput();
            }}
          />
          <div className="icon">
            {showPassword ? (
              <div onClick={() => setShowPassword(false)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7083 7.625C15.7833 4.6 12.9667 2.85834 9.99999 2.85834C8.51666 2.85834 7.07499 3.29167 5.75832 4.1C4.44166 4.91667 3.25832 6.10834 2.29166 7.625C1.45832 8.93334 1.45832 11.0583 2.29166 12.3667C4.21666 15.4 7.03332 17.1333 9.99999 17.1333C11.4833 17.1333 12.925 16.7 14.2417 15.8917C15.5583 15.075 16.7417 13.8833 17.7083 12.3667C18.5417 11.0667 18.5417 8.93334 17.7083 7.625ZM9.99999 13.3667C8.13332 13.3667 6.63332 11.8583 6.63332 10C6.63332 8.14167 8.13332 6.63334 9.99999 6.63334C11.8667 6.63334 13.3667 8.14167 13.3667 10C13.3667 11.8583 11.8667 13.3667 9.99999 13.3667Z"
                    fill="#7B7B7B"
                  />
                  <path
                    d="M10 7.61667C8.69167 7.61667 7.625 8.68334 7.625 10C7.625 11.3083 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3083 12.3833 10C12.3833 8.69167 11.3083 7.61667 10 7.61667Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setShowPassword(true)}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.725 7.64992C17.4834 7.26659 17.225 6.90825 16.9584 6.57492C16.65 6.18325 16.0667 6.14992 15.7167 6.49992L13.2167 8.99992C13.4 9.54992 13.4334 10.1833 13.2667 10.8416C12.975 12.0166 12.025 12.9666 10.85 13.2583C10.1917 13.4249 9.55837 13.3916 9.00837 13.2083C9.00837 13.2083 7.81671 14.3999 6.95837 15.2583C6.54171 15.6749 6.67504 16.4083 7.23337 16.6249C8.12504 16.9666 9.05004 17.1416 10 17.1416C11.4834 17.1416 12.925 16.7083 14.2417 15.8999C15.5834 15.0666 16.7917 13.8416 17.7667 12.2833C18.5584 11.0249 18.5167 8.90825 17.725 7.64992Z"
                    fill="#7B7B7B"
                  />
                  <path
                    d="M11.6834 8.3167L8.3167 11.6834C7.8917 11.25 7.6167 10.65 7.6167 10C7.6167 8.6917 8.68337 7.6167 10 7.6167C10.65 7.6167 11.25 7.8917 11.6834 8.3167Z"
                    fill="#7B7B7B"
                  />
                  <path
                    d="M15.2082 4.79173L12.3832 7.61673C11.7748 7.00006 10.9332 6.6334 9.99984 6.6334C8.13317 6.6334 6.63317 8.14173 6.63317 10.0001C6.63317 10.9334 7.00817 11.7751 7.6165 12.3834L4.79984 15.2084H4.7915C3.8665 14.4584 3.0165 13.5001 2.2915 12.3667C1.45817 11.0584 1.45817 8.9334 2.2915 7.62506C3.25817 6.1084 4.4415 4.91673 5.75817 4.10006C7.07484 3.30007 8.5165 2.8584 9.99984 2.8584C11.8582 2.8584 13.6582 3.54173 15.2082 4.79173Z"
                    fill="#7B7B7B"
                  />
                  <path
                    d="M12.3834 10.0001C12.3834 11.3084 11.3167 12.3834 10.0001 12.3834C9.95007 12.3834 9.9084 12.3834 9.8584 12.3667L12.3667 9.8584C12.3834 9.9084 12.3834 9.95007 12.3834 10.0001Z"
                    fill="#7B7B7B"
                  />
                  <path
                    d="M18.1417 1.8584C17.8917 1.6084 17.4834 1.6084 17.2334 1.8584L1.8584 17.2417C1.6084 17.4917 1.6084 17.9001 1.8584 18.1501C1.9834 18.2667 2.14173 18.3334 2.3084 18.3334C2.47507 18.3334 2.6334 18.2667 2.7584 18.1417L18.1417 2.7584C18.4001 2.5084 18.4001 2.1084 18.1417 1.8584Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            )}
            <div
              onClick={() => {
                setPassword("");
                changeInput();
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0001 1.66675C5.40841 1.66675 1.66675 5.40841 1.66675 10.0001C1.66675 14.5917 5.40841 18.3334 10.0001 18.3334C14.5917 18.3334 18.3334 14.5917 18.3334 10.0001C18.3334 5.40841 14.5917 1.66675 10.0001 1.66675ZM12.8001 11.9167C13.0417 12.1584 13.0417 12.5584 12.8001 12.8001C12.6751 12.9251 12.5167 12.9834 12.3584 12.9834C12.2001 12.9834 12.0417 12.9251 11.9167 12.8001L10.0001 10.8834L8.08342 12.8001C7.95842 12.9251 7.80008 12.9834 7.64175 12.9834C7.48342 12.9834 7.32508 12.9251 7.20008 12.8001C6.95842 12.5584 6.95842 12.1584 7.20008 11.9167L9.11675 10.0001L7.20008 8.08342C6.95842 7.84175 6.95842 7.44175 7.20008 7.20008C7.44175 6.95842 7.84175 6.95842 8.08342 7.20008L10.0001 9.11675L11.9167 7.20008C12.1584 6.95842 12.5584 6.95842 12.8001 7.20008C13.0417 7.44175 13.0417 7.84175 12.8001 8.08342L10.8834 10.0001L12.8001 11.9167Z"
                  fill="#7B7B7B"
                />
              </svg>
            </div>
          </div>
        </Input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center"
          }}
        >
          <Link to="/forgot-password">
            <span>Forgot password?</span>
          </Link>
          <div id="wrong-email-pass" className="wrong-email-pass">
            Wrong email or password.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column"
          }}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit();
            }}
          >
            Login
          </Button>
          <Link to="/sign-up">
            Don’t have an account? <span>Sign up</span>
          </Link>
        </div>
      </Form>

      {showModal && (
        <Modal>
          <VerifyModal onClick={(e) => e.stopPropagation()}>
            <h2>Verify 2FA</h2>
            <div className="label">2FA Code</div>
            <Input>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <div className="icon" onClick={() => setCode("")}>
                <img src={IconClose} alt="Clear" />
              </div>
            </Input>
            <Button onClick={handleVerify}>Verify</Button>
          </VerifyModal>
        </Modal>
      )}
    </UserLayout>
  );
};

export default Login;
