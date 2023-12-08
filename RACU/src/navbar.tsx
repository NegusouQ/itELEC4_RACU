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

                    {/* NAV BUTTON FOR WISH LISTS */}
            <Link className='navLinks' to='/games'>
                <div 
                style={{
                    marginLeft:'30px'
                }}>
                    <GiftFilled />
                    <span>
                        Wish Lists</span>
                </div>
            </Link>


                    {/* NAV BUTTON FOR PROFILE */}
            <Link className='navLinks' to='profile'>
                <div
                style={{
                    marginLeft:'30px'
                }}>
                    <SmileFilled />
                    <span>
                        Profile</span>
                </div>
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

                <div
                style={{
                    marginLeft:'40px'
                }}>
                    <LogoutOutlined />
                    <span>
                    Logout
                    </span>
                </div>
            </div>
        </div>
        <Outlet/>

    </>
}

export default NavBar;