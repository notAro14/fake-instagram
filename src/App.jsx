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
const Public = loadable(() =>
  import(/* webpackChunkName: "Public" */ '~components/Public')
);

const App = () => {
  const [user] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {user ? (
        <AuthenticatedApp fallback={<Spinner />} />
      ) : (
        <Public fallback={<Spinner />} />
      )}
    </BrowserRouter>
  );
};

export default App;
