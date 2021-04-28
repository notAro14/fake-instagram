import React from 'react';
import { NavbarWrapper, NavbarContent } from './index.style';
import SearchUser from './SearchUser';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Logo />
        <SearchUser />
        <NavLinks />
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
