import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
} from "./NavbarElements";
import { navInfo } from "../../constants/Data";

const Navbar = (props) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>wenhao.</NavLogo>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navInfo.map((info) => (
            <NavItems>
              <NavLinks
                to={info.link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {info.name}
              </NavLinks>
            </NavItems>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
