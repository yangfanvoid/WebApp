import React from 'react';
import { connect } from 'dva';
import Bundle from './bundle';

class Dragula extends React.Component {
  render() {
    return (<Bundle load={
      (cb) => {
        require.ensure([], (require) => {
          cb(require('../components/Dragula'));
        }, 'dragulapage');
      }}
    >
      { (Component) => { return <Component {...this.props} />; } }
    </Bundle>);
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Dragula);
