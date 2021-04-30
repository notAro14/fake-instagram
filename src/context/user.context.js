/* eslint-disable react/jsx-filename-extension, react/prop-types */

import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ERASE_USER':
      return { ...state, user: null };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used inside a UserProvider');
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    // user: { displayname: 'Aro Andria', username: 'notAro14' },
  });
  const setUser = user =>
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  const value = { state, setUser, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser };
