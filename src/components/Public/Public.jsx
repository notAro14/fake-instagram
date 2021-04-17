import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import { Box } from '~components/common/Box';
import { PrimaryLink } from '~components/common/Link';

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
          <Box>
            <p>
              Already have an account ?{' '}
              <PrimaryLink to="signin">Sign in</PrimaryLink>
            </p>
          </Box>
        </Route>
      </Switch>
    </>
  );
};

export default Public;
