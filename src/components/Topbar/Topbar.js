import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarMenu,
  TopbarLink,
} from "./TopbarElements";

import { navInfo } from "../../constants/Data";

const Topbar = (props) => {
  return (
    <TopbarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          {navInfo.map((info, index) => (
            <TopbarLink
              key={index}
              to={info.link}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={props.toggle}
            >
              {info.name}
            </TopbarLink>
          ))}
        </TopbarMenu>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
