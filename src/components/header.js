import styles from './header.less'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Button, Popover } from "antd";

export function Header(){
  function handleViewPersonInfo(){
  
  }
  const content = (
    <>
      <p className={styles.popoverContent} onClick={()=>handleViewPersonInfo}>个人信息</p>
      <p className={styles.popoverContent}>退出登录</p>
    </>
  )
  return(
    <div className={styles.container}>
      <div className={styles.left}>
      <MenuFoldOutlined></MenuFoldOutlined>
      </div>
      <div className={styles.right}>
        <Popover placement="bottom" content={content} arrowPointAtCenter >
          <Button>Align edge / 边缘对齐</Button>
        </Popover>
      </div>
    </div>
  )
}