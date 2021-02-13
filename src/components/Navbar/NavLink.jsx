import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './Navbar.style';
import Link from '../Link/Link.style';

const NavLink = ({ children, to }) => {
  return (
    <NavLinkWrapper>
      <Link to={to}>{children}</Link>
    </NavLinkWrapper>
  );
};

NavLink.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
