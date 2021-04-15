import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};

export default Public;
