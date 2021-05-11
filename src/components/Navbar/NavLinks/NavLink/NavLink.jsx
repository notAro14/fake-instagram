import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../../common'
import { NavLinkWrapper } from './NavLink.style'

const NavLink = ({ children, to }) => {
  return (
    <NavLinkWrapper>
      <Link to={to}>{children}</Link>
    </NavLinkWrapper>
  )
}

NavLink.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavLink
