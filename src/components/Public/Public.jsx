import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import FourOFour from '~components/FourOFour';

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
          <FourOFour />
        </Route>
      </Switch>
    </>
  );
};

export default Public;
