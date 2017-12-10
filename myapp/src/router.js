import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import BasicLayout from'./Layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/user" exact component={IndexPage} /> */}
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}
export default RouterConfig;
