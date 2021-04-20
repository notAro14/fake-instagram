import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import { Spinner, Layout } from 'Components/common';
import Navbar from './Navbar';

const NewsFeedPage = loadable(() =>
  import(/* webpackChunkName: "NewsFeedPage" */ './NewsFeedPage')
);

const NotFoundPage = loadable(() =>
  import(/* webpackChunkName: "NotFoundPage" */ '../NotFoundPage')
);

const PublishPage = loadable(() =>
  import(/* webpackChunkName: "PublishPage" */ './PublishPage')
);

const AuthenticatedApp = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/">
            <NewsFeedPage fallback={<Spinner />} />
          </Route>
          <Route exact path="/publish">
            <PublishPage fallback={<Spinner />} />
          </Route>
          <Route>
            <NotFoundPage fallback={<Spinner />} />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default AuthenticatedApp;
