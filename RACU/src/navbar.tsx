import './navbar.css'
import { Outlet } from "react-router"
import { Link } from 'react-router-dom';
import UserProf from '../src/assets/images/23.png'
import char from '../src/assets/images/a-15.png'
import { Button, ConfigProvider, Modal } from 'antd';
import { SmileFilled, LogoutOutlined, GiftFilled } from '@ant-design/icons';
import { useState } from 'react';

const NavBar: React.FC = () => {
      // logout user MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const logoutConfirmModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return <>
        <div className="nav-container">
            <img className='nav-logo' src={ UserProf } alt="" />
            <span className='username'>Username</span>


            <Link className='navLinks' to='/games'>
            <GiftFilled />
            <span>
                Wish List</span>
            </Link>

            {/* <Link className='navLinks' to='games'>
            <img className='nav-icons' src={ gameIcon }/>
            <span>
                Games</span>
            </Link> */}

            <Link className='navLinks' to='profile'>
            <SmileFilled />
            <span>
                Profile</span>
            </Link>
            
            <ConfigProvider
            theme={{
                components: {
                Modal: {
                colorText: '#660000',
                colorTextHeading: '#660000'
                },
                },
            }}
            >
                <Modal
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                closable={false}
                >
                    <div className="logout-confirmMessage-content">
                        <span className='logout-message'>Are you sure you want to logout?</span>
                        <img className='character-logout-confirm' src={ char }/>
                    </div>
                    <div className="logoutConfirm-btns">
                        <Button onClick={handleCancel} >No</Button>
                        
                        <Link to='/'>
                        <Button onClick={handleOk}>Yes</Button>
                        </Link>

                    </div>
                </Modal>
            </ConfigProvider>
            

            <div className='navLinks'
            onClick={logoutConfirmModal}
            style={{ marginTop:'28em' }}>
            <LogoutOutlined />
            <span>
                Logout</span>
            </div>
        </div>
        <Outlet/>

    </>
}

export default NavBar;