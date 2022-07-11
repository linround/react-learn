import { Menu } from 'antd';
import React from 'react';
import {base, CodePrograms, Programs} from "../routes/index";
import { MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


class Index extends React.Component {
  render() {
    return (
      <Menu
        style={{width: 256}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        inlineCollapsed={false}
        mode="inline"
        theme={'dark'}
      >
        <Menu.SubMenu key="sub1" icon={<MailOutlined/>} title="React基础">
          {
            base.map((item,index)=>{
              return (
                <Menu.Item key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
            })}
        </Menu.SubMenu>
        <Menu.SubMenu key="sub2" icon={<MailOutlined/>} title="代码方案">
          {
            CodePrograms.map((item,index)=>{
              return (
                <Menu.Item key={`${index}-2`}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
            })}
        </Menu.SubMenu>
        <Menu.SubMenu key="sub3" icon={<MailOutlined/>} title="项目方案">
          {
            Programs.map((item,index)=>{
              return (
                <Menu.Item key={`${index}-3`}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
              )
            })}
        </Menu.SubMenu>
      </Menu>
    );
  }
}
export default Index
