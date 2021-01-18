import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
} from "./TopbarElements";

const Topbar = (props) => {
  return (
    <TopbarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={props.toggle}>
            about me.
          </TopbarLink>
          <TopbarLink to="experience" onClick={props.toggle}>
            experience.
          </TopbarLink>
          <TopbarLink to="projects" onClick={props.toggle}>
            projects.
          </TopbarLink>
          <TopbarLink to="contact" onClick={props.toggle}>
            contact.
          </TopbarLink>
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
