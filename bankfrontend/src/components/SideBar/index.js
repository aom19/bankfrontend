import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWraper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebareElements";

const SideBar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            {" "}
            About{" "}
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            {" "}
            Discover{" "}
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            {" "}
            Services{" "}
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            {" "}
            Sign Up{" "}
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin"> Sign In</SideBarRoute>
        </SideBtnWrap>
      </SidebarWraper>
    </SidebarContainer>
  );
};

export default SideBar;
