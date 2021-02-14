import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Spinner from './components/Spinner/Spinner';
// import Home from './views/Home/Home';
// import NotFound from './views/NotFound/NotFound';

const Home = lazy(() =>
  import(/* webpackChunkName: "Home" */ './views/Home/Home')
);

const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ './views/NotFound/NotFound')
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
