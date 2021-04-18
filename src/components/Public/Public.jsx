import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import FourOFour from '~components/FourOFour';

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </>
  );
};

export default Public;
