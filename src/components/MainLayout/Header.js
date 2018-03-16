import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/dragula">
        <Link to="/dragula"><Icon type="bars" />dragula</Link>
      </Menu.Item>
      <Menu.Item key="/delayrequire">
        <Link to="/delayrequire"><Icon type="bars" />Delayload</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users?page=1"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
      <Menu.Item key="/antd">
        <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
