import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './views/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default App;
