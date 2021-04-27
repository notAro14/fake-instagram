import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFoundPage from 'Components/NotFoundPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

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
      <Redirect from="/" to="/signup" />
    </>
  );
};

export default Public;
