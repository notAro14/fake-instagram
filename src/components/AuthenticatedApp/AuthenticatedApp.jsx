import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Spinner from '~components/common/Spinner';
import Navbar from './Navbar';

const Feed = loadable(() => import(/* webpackChunkName: "Feed" */ './Feed'));

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
            <Feed fallback={<Spinner />} />
          </Route>
          <Route exact path="/publish">
            <PublishPost fallback={<Spinner />} />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default AuthenticatedApp;
