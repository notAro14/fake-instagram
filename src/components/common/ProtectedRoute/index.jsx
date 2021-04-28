import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppShell from '../../AppShell';
import { useUser } from '../../../context/user.context';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, ...rest }) => {
  const {
    state: { user },
  } = useUser();
  return (
    <Route {...rest}>
      {user ? <AppShell>{children}</AppShell> : <Redirect to="/signin" />}
    </Route>
  );
};

export default ProtectedRoute;
