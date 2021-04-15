import React, { useState } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '~components/globalStyle.js';
import Spinner from '~components/common/Spinner';

const AuthenticatedApp = loadable(() =>
  import(
    /* webpackChunkName: "AuthenticatedApp" */ '~components/AuthenticatedApp'
  )
);

const App = () => {
  const [user] = useState(true);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {user ? (
        <AuthenticatedApp fallback={<Spinner />} />
      ) : (
        <div>Unauthenticated</div>
      )}
    </BrowserRouter>
  );
};

export default App;
