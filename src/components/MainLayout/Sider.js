import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;


function Sider({ location }) {
  return (
    <Menu
      mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0,width: '20%' }}
    >
    
      <SubMenu key="sub1" title={<span><Icon type="user" />消息管理</span>}>
            <Menu.Item key="1"><Link to="/dragula">员工权限的配置</Link></Menu.Item>
            <Menu.Item key="12">消息读取界面</Menu.Item>
            <Menu.Item key="2">待读消息</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />ssssssssssss</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />ssssssss</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
    </Menu>
  );
}

export default Sider;
