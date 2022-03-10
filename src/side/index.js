import { Menu } from 'antd';
import React from 'react';
import routes from "../routes/index";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

class Sider extends React.Component {
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined/>} title="React学习">
                    <Menu.ItemGroup key="g1" title="路由">
                        {routes.map((item,index)=>{
                           return <Menu.Item key={index}><Link to={item.path}>{item.path}</Link></Menu.Item>
                        })}
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}
export default Sider
