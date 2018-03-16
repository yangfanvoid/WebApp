import React from 'react';
import { connect } from 'dva';
import '!style!css!./Dragula.css';
import Dragula from 'react-dragula';
import 'react-dragula/dist/dragula.css';
import MainLayout from '../components/MainLayout/MainLayout';

class DragulaPage extends React.Component {
  componentDidMount() {
    this.props.dispatch({ type: 'dragula/querySortList', payload: {} });
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      const options = { };
      const d = Dragula([componentBackingInstance], options);
      d.on('dragend', () => {
        const sort = [];
        // eslint-disable-next-line
        for (let i = 0, j = componentBackingInstance.children.length; i < j; i++) {
          sort.push(componentBackingInstance.children[i].getAttribute('data-key'));
        }
        // eslint-disable-next-line
        setTimeout(function() {
          // eslint-disable-next-line
          alert("当前顺序："+sort.join("->"))
        }, 440);
      });
    }
  };


  render() {
    const children = [];
    // eslint-disable-next-line
    for (let i = 0, j = this.props.sortlist.length; i < j; i++) {
      const item = this.props.sortlist[i];
      children.push(<div style={{ fontSize: 13, borderBottom: '1px solid #ccc', padding: '10px 0px 10px 30px' }} data-key={item.id} key={item.id}>{item.label}</div>);
    }
    return (<MainLayout location={this.props.location}>
      <a href="https://bevacqua.github.io/dragula/">more demo</a><br />
      <a href="https://github.com/bevacqua/dragula">git</a>
      <div>Drag Row</div>
      <div className="container" ref={this.dragulaDecorator}>
        { children }
      </div>
      <br />
      <div className="container1" ref={this.dragulaDecorator}>
        { children }
      </div>
    </MainLayout>);
  }
}

function mapStateToProps(state) {
  const { sortlist } = state.dragula;
  return {
    sortlist,
  };
}

export default connect(mapStateToProps)(DragulaPage);
