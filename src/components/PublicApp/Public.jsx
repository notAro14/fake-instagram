import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import NotFoundPage from '~components/NotFoundPage';

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

export default Public;
