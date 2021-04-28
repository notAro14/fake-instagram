import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import loadable from '@loadable/component';
import { useHistory } from 'react-router-dom';
import GlobalStyle from 'Components/globalStyle.js';
import { Spinner } from 'Components/common';
import { useUser } from './context/user.context';

ReactModal.setAppElement('#root');

const AuthenticatedApp = loadable(() =>
  import(
    /* webpackChunkName: "AuthenticatedApp" */ 'Components/AuthenticatedApp'
  )
);
const PublicApp = loadable(() =>
  import(/* webpackChunkName: "PublicApp" */ 'Components/PublicApp')
);

const App = () => {
  const { user, dispatch } = useUser();
  const history = useHistory();

  useEffect(() => {
    const verifyToken = async () => {
      const response = await fetch('/api/users/verify');
      const data = await response.json();
      if (response.status === 403 && data.error === 'Invalid request!') {
        history.push('/signin');
        return dispatch({ type: 'ERASE_USER' });
      }
      const { userId, displayname, email, username } = data;
      return dispatch({
        type: 'SET_USER',
        payload: { userId, displayname, email, username },
      });
    };
    verifyToken();
  }, [dispatch, history]);

  return (
    <>
      <GlobalStyle />
      {user ? (
        <AuthenticatedApp fallback={<Spinner />} />
      ) : (
        <PublicApp fallback={<Spinner />} />
      )}
    </>
  );
};

export default App;
