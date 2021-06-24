/* eslint-disable react/jsx-filename-extension, react/prop-types */

import React, { createContext, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UserContext = createContext()

const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used inside a UserProvider')
  }
  const { authState, setAuthState, clearAuthState, isAuthenticated } = context
  return { authState, setAuthState, clearAuthState, isAuthenticated }
}

const UserProvider = ({ children }) => {
  const history = useHistory()

  const token = localStorage.getItem('token')
  const userInfo = localStorage.getItem('userInfo')
  const expiresAt = localStorage.getItem('expiresAt')

  const [user, setUser] = useState({
    token,
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    expiresAt,
  })

  function setAuthState(newUser) {
    localStorage.setItem('token', newUser.token)
    localStorage.setItem('userInfo', JSON.stringify(newUser.userInfo))
    localStorage.setItem('expiresAt', newUser.expiresAt)

    setUser({
      token: newUser.token,
      userInfo: newUser.userInfo,
      expiresAt: newUser.expiresAt,
    })
  }

  function clearAuthState() {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('expiresAt')

    setUser({})
    history.push('/')
  }

  function isAuthenticated() {
    if (!user.token || !user.userInfo) return false
    return new Date().getTime() / 1000 < Number(user.expiresAt)
  }

  return (
    <UserContext.Provider
      value={{ authState: user, setAuthState, clearAuthState, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, useUser }
