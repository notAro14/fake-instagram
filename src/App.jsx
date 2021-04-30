import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from 'Components/globalStyle.js';
import { ProtectedRoute } from 'Components/common';
// import { Spinner } from 'Components/common';
import NewsFeedPage from './components/NewsFeedPage';
import PublishPage from './components/PublishPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NotFoundPage from './components/NotFoundPage';

ReactModal.setAppElement('#root');

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div role="alert">
          <p>Oops something bad happened</p>
          <pre>{error.message}</pre>
          <button type="button" onClick={resetErrorBoundary}>
            Reset
          </button>
        </div>
      )}
    >
      <GlobalStyle />
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
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        draggable
      />
    </ErrorBoundary>
  );
};

export default App;
