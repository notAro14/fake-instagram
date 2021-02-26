import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from '../style/Navbar.style';
import Link from '../../Link';

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
