import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkContainer } from './Navbar.style';
import Link from '../Link/Link.style';

const NavLink = ({ children, to }) => {
  return (
    <NavLinkContainer>
      <Link to={to}>{children}</Link>
    </NavLinkContainer>
  );
};

NavLink.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLink;
