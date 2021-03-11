import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import NavLink from './NavLink';
import { NavLinksWrapper } from './NavLinks.style';

const NavLinks = () => (
  <NavLinksWrapper>
    <NavLink to="/">
      <AiFillHome />
    </NavLink>
    <NavLink to="/profile">
      <CgProfile />
    </NavLink>
  </NavLinksWrapper>
);

export default NavLinks;
