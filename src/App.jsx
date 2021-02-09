import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './components/Loading/Loading';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ './views/HomePage')
);
const InstallationPage = lazy(() =>
  import(/* webpackChunkName: "InstallationPage" */ './views/InstallationPage')
);
const NotFoundPage = lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ './views/NotFoundPage')
);

export default () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/installation" component={InstallationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};
