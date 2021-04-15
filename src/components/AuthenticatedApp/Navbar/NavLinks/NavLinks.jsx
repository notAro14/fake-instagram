import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdPhotoCamera } from 'react-icons/md';
import NavLink from './NavLink';
import { NavLinksWrapper } from './NavLinks.style';

const navLinks = [
  {
    to: '/',
    key: 'home',
    icon: <AiFillHome />,
  },
  {
    to: '/publish',
    key: 'publish',
    icon: <MdPhotoCamera />,
  },
  {
    to: '/profile',
    key: 'profile',
    icon: <CgProfile />,
  },
];

const NavLinks = () => (
  <NavLinksWrapper>
    {navLinks.map(({ to, icon, key }) => (
      <NavLink key={key} to={to}>
        {icon}
      </NavLink>
    ))}
  </NavLinksWrapper>
);

export default NavLinks;
