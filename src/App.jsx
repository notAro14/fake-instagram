import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './modules/common/Layout';
import Spinner from './modules/common/Spinner';
// import Home from './views/Home/Home';
// import NotFound from './views/NotFound/NotFound';

const Feed = lazy(() =>
  import(/* webpackChunkName: "Feed" */ './modules/Feed')
);

const FourOFour = lazy(() =>
  import(/* webpackChunkName: "FourOFour" */ './modules/FourOFour')
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route component={FourOFour} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
