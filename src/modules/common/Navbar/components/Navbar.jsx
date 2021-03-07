import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import logo from '~public/images/logo.png';
import {
  Logo,
  LogoWrapper,
  NavbarWrapper,
  NavbarContent,
  NavLinks,
} from '../style/Navbar.style';
import NavLink from './NavLink';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <LogoWrapper to="/">
          <Logo>Fake -</Logo>
          <img alt="Instagram" src={logo} />
        </LogoWrapper>
        <SearchBar />
        <NavLinks>
          <NavLink to="/">
            <AiFillHome />
          </NavLink>
          {/* <NavLink to="/messages">
            <FiSend />
          </NavLink> */}
          <NavLink to="/profile">
            <CgProfile />
          </NavLink>
        </NavLinks>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
