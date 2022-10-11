import avatar from "@Assets/images/stake/avatar.png";
import { LogoutIcon } from "@Components/atoms/icon/logout";
import { ProfileIcon } from "@Components/atoms/icon/profile";
import React, { useRef } from "react";
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
  const navigate = useNavigate();
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
        <Dropdown>
          {dropdownList.map((item, index) => (
            <Item
              key={`dropdown-item-${index}`}
              onClick={() => navigate(item.link)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Item>
          ))}
        </Dropdown>
      )}
    </ProfileWrapper>
  );
}
