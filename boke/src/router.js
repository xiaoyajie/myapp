import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import first from './page/first';
import BasicLayout from'./Layouts/BasicLayout';
import second from'./page/second';
import third from'./page/third'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
        <Route path="/a"  component={first}/>
        <Route path="/b" component={second}/>
        <Route path="/c" component={third}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
