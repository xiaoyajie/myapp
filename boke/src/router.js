import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import first from './first';
import BasicLayout from'./Layouts/BasicLayout'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/a"  component={first}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
