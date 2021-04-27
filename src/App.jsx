import React, { useState } from 'react';
import ReactModal from 'react-modal';
import loadable from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'Components/globalStyle.js';
import { Spinner } from 'Components/common';

ReactModal.setAppElement('#root');

const AuthenticatedApp = loadable(() =>
  import(
    /* webpackChunkName: "AuthenticatedApp" */ 'Components/AuthenticatedApp'
  )
);
const PublicApp = loadable(() =>
  import(/* webpackChunkName: "Public" */ 'Components/PublicApp')
);

const App = () => {
  const [user] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {user ? (
        <AuthenticatedApp fallback={<Spinner />} />
      ) : (
        <PublicApp fallback={<Spinner />} />
      )}
    </BrowserRouter>
  );
};

export default App;
