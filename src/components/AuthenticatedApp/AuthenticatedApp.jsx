import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import { Spinner } from '~components/common';
import Navbar from './Navbar';

const NewsFeedPage = loadable(() =>
  import(/* webpackChunkName: "NewsFeedPage" */ './NewsFeedPage')
);

const NotFoundPage = loadable(() =>
  import(/* webpackChunkName: "NotFoundPage" */ '../NotFoundPage')
);

const PublishPost = loadable(() =>
  import(/* webpackChunkName: "PublishPost" */ './PublishPost')
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
            <PublishPost fallback={<Spinner />} />
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
