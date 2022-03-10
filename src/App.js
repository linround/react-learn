import 'antd/dist/antd.css';
import Sider from './side/index'
import './style/main.css'
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="admin-header">头部组件</div>
        <div className="admin-body">
            <div className="admin-body-nav">
                <Sider></Sider>
            </div>
            <div className="admin-body-view">
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  );
}

export default App;
