import '@reach/menu-button/styles.css'
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
} from '@reach/menu-button'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdPhotoCamera } from 'react-icons/md'
import NavLink from './NavLink'
import { NavLinksWrapper } from './NavLinks.style'
import { useUser } from '../../../context/user.context'

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
  // {
  //   to: '/profile',
  //   key: 'profile',
  //   icon: <CgProfile />,
  // },
]

const NavLinks = () => {
  const { clearAuthState } = useUser()
  return (
    <NavLinksWrapper>
      {navLinks.map(({ to, icon, key }) => (
        <NavLink key={key} to={to}>
          {icon}
        </NavLink>
      ))}
      <Menu>
        <MenuButton>
          <CgProfile />
        </MenuButton>
        <MenuPopover>
          <MenuItems>
            <MenuItem onSelect={clearAuthState}>Log Out</MenuItem>
          </MenuItems>
        </MenuPopover>
      </Menu>
    </NavLinksWrapper>
  )
}

export default NavLinks
