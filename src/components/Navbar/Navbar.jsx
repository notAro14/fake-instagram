import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import {
  Logo,
  LogoContainer,
  NavbarWrapper,
  NavbarContent,
  NavLinks,
} from './Navbar.style';
import NavLink from './NavLink';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <LogoContainer to="/">
          <Logo>Fake -</Logo>
          <img
            alt="Instagram"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </LogoContainer>
        <SearchBar />
        <NavLinks>
          <NavLink to="/">
            <AiFillHome />
          </NavLink>
          <NavLink to="/messages">
            <FiSend />
          </NavLink>
          <NavLink to="/profile">
            <CgProfile />
          </NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
