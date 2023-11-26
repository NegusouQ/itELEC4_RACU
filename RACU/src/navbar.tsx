import './navbar.css'
import { Outlet } from "react-router"
import { Link } from 'react-router-dom';
import UserProf from '../src/assets/images/23.png'
import gameIcon from '../src/assets/icons/games.png'
import char from '../src/assets/images/a-9.png'
import { Button, ConfigProvider, Modal } from 'antd';
import { GitlabFilled, LogoutOutlined } from '@ant-design/icons';
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
            <img className='nav-icons' src={ gameIcon }/>
            <span>
                Games</span>
            </Link>

            {/* <Link className='navLinks' to='games'>
            <img className='nav-icons' src={ gameIcon }/>
            <span>
                Games</span>
            </Link> */}

            <Link className='navLinks' to='profile'>
            <GitlabFilled />
            <span>
                Profile</span>
            </Link>
            
            <ConfigProvider
            theme={{
                components: {
                Modal: {
                contentBg: '#1C1C1C',
                headerBg: '#1C1C1C',
                colorText: 'white',
                colorTextHeading: 'white'
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
                        <Button ghost onClick={handleCancel} >No</Button>
                        
                        <Link to='/'>
                        <Button onClick={handleOk} ghost>Yes</Button>
                        </Link>

                    </div>
                </Modal>
            </ConfigProvider>
            

            <div className='navLinks'
            onClick={logoutConfirmModal}
            style={{ marginTop:'29em' }}>
            <LogoutOutlined />
            <span>
                Logout</span>
            </div>
        </div>
        <Outlet/>

    </>
}

export default NavBar;