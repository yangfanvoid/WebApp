import React from 'react';
import ReactDOM from 'react-dom';

class Drag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.style ? props.style.left : 0,
      y: props.style ? props.style.top : 0,
      drag: false,
    };
  }
  componentDidMount() {
    // eslint-disable-next-line
    let box = ReactDOM.findDOMNode(this.ref);
    let x = this.state.x;
    let y = this.state.y;
    let sx = 0;
    let sy = 0;
    let ex = 0;
    let ey = 0;
    box.addEventListener('mousedown', (e) => {
      sx = e.clientX;
      sy = e.clientY;
      x = this.state.x;
      y = this.state.y;
      // box.style.left = '';
      // box.style.top = '';
      this.setState({ drag: true });
    });
    window.document.body.addEventListener('mousemove', (e) => {
      ex = e.clientX;
      ey = e.clientY;
      if (this.state.drag) {
        this.setState({ x: (ex - sx) + x, y: (ey - sy) + y });
      }
    });
    window.document.body.addEventListener('mouseup', () => {
      // this.setState({ ex: e.clientX, ey: e.clientY });
      // this.setState({ x: this.state.x + ex - sx, y : this.state.y + ey - sy });
      this.setState({ drag: false });
    });
  }
  ref = null;
  render() {
    const { children, style } = this.props;
    return (<div
      ref={(i) => { this.ref = i; }}
      style={{ cursor: '-webkit-grab', ...style, position: 'absolute', left: this.state.x, top: this.state.y }}
    >
      {children}
    </div>);
  }
}

export default Drag;
