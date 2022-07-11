import styles from './style/main.less'
import { Outlet } from "react-router-dom";
import Side from './side/index'
import { Header } from './components/header'
import 'antd/dist/antd.min.css';
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Side></Side>
      </div>
      <div className={styles.right}>
        <Header></Header>
        <div className={styles.view}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
