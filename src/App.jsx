import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from 'Components/globalStyle.js';
import NewsFeedPage from './components/NewsFeedPage';
import PublishPage from './components/PublishPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';
import { ProtectedRoute, Box, Button } from './components/common';
import useMediaQuery from './hooks/useMediaQuery';

ReactModal.setAppElement('#root');

const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px');
  return (
    <>
      <GlobalStyle />
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <Box role="alert">
            <p style={{ textAlign: 'center', marginBottom: '15px' }}>
              😱 Oops something very bad happened
            </p>
            <p
              style={{
                backgroundColor: 'tomato',
                color: 'white',
                marginBottom: '15px',
                padding: '5px',
                textAlign: 'center',
              }}
            >
              Possible reason : {error.message}
            </p>
            <Button type="button" onClick={resetErrorBoundary}>
              Please save me
            </Button>
          </Box>
        )}
      >
        <Switch>
          <ProtectedRoute exact path="/">
            <NewsFeedPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/publish">
            <PublishPage />
          </ProtectedRoute>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <ToastContainer
          position={isMobile ? 'bottom-center' : 'top-center'}
          autoClose={10000}
          hideProgressBar
          draggable
        />
      </ErrorBoundary>
    </>
  );
};

export default App;
