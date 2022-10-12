import avatar from "@Assets/images/stake/avatar.png";
import { LogoutIcon } from "@Components/atoms/icon/logout";
import { ProfileIcon } from "@Components/atoms/icon/profile";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { logoutRequest } from "@Redux/actions/accounts";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Info, Item, Main, ProfileWrapper } from "./style";
export interface IProfileProps {}

const dropdownList = [
  {
    name: "Profile",
    link: "/profile",
    icon: <ProfileIcon />,
  },
  {
    name: "Logout",
    link: "/logout",
    icon: <LogoutIcon />,
  },
];
export function Profile(props: IProfileProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutRequest());
  };

  useOnClickOutside(ref, () => setShowDropdown(false));
  return (
    <ProfileWrapper>
      <Main
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <Avatar src={avatar} alt="avatar" />
        <Info>
          <span className="name">Crazy Name</span>
          <span className="level">Level 1</span>
        </Info>
      </Main>
      {showDropdown && (
        <Dropdown ref={ref}>
          <Item
            onClick={() => {
              navigate("/profile");
            }}
          >
            <ProfileIcon />
            <span>Profile</span>
          </Item>
          <Item onClick={logout}>
            <LogoutIcon />
            <span>Logout</span>
          </Item>
        </Dropdown>
      )}
    </ProfileWrapper>
  );
}
