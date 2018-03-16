import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UsersPage from './routes/UsersPage.js';
import DragulaPage from './routes/Dragula.js';
import Bundle from './routes/bundle';


function DelayLoad(props) {
  return (
    <Bundle load={
      (cb) => {
        require.ensure([], (require) => {
          cb(require('./routes/DelayRequire'));
        }, 'delayload');
      }}
    >
      { (Component) => { return <Component {...props} />; } }
    </Bundle>
  );
}

function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/delayrequire" component={DelayLoad} />
        <Route path="/dragula" component={DragulaPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
