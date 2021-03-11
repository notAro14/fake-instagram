import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '~components/Layout';
import Spinner from '~components/common/Spinner';

const Feed = loadable(() =>
  import(/* webpackChunkName: "Feed" */ '~components/Feed')
);
const FourOFour = loadable(() =>
  import(/* webpackChunkName: "FourOFour" */ '~components/FourOFour')
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Feed fallback={<Spinner />} />
          </Route>
          <Route>
            <FourOFour fallback={<Spinner />} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
