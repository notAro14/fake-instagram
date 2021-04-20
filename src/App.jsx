import React, { useState } from 'react';
import ReactModal from 'react-modal';
import loadable from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '~components/globalStyle.js';
import { Spinner } from '~components/common';

ReactModal.setAppElement('#root');

const AuthenticatedApp = loadable(() =>
  import(
    /* webpackChunkName: "AuthenticatedApp" */ '~components/AuthenticatedApp'
  )
);
const PublicApp = loadable(() =>
  import(/* webpackChunkName: "Public" */ '~components/PublicApp')
);

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <BrowserRouter>
      <GlobalStyle />
      {user ? (
        <AuthenticatedApp fallback={<Spinner />} />
      ) : (
        <PublicApp fallback={<Spinner />} />
      )}
      <button type="button" onClick={() => setUser(x => !x)}>
        toggle
      </button>
    </BrowserRouter>
  );
};

export default App;
