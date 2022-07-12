import React from "react";
import { Outlet } from "react-router-dom";
import 'antd/dist/antd.min.css';
import {Layout} from "antd";
import Side from './side/index'
import { HeaderComponent } from './components/header'
const {Sider,Footer,Content,Header  } = Layout
function App() {
  return (
    <Layout>
      <Sider>
        <Side></Side>
      </Sider>
      <Layout>
        <Header>
          <HeaderComponent></HeaderComponent>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
}

export default App;
