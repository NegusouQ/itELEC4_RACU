import './navbar.css'
import { Outlet } from "react-router"
import { Link } from 'react-router-dom';
import UserProf from '../src/assets/images/23.png'
import char from '../src/assets/images/a-15.png'
import { Button, ConfigProvider, Modal } from 'antd';
import { SmileFilled, LogoutOutlined, GiftFilled } from '@ant-design/icons';
import Logo from '../src/assets/images/a-20.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar: React.FC = () => {
      // logout user MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userName, setUserName] = useState<string>('');

useEffect(() => {
  const fetchData = async () => {
      const response = await axios.get(`https://localhost:7070/api/User`, values);
      setUserName(response.data); 
  };

  fetchData();
}, []);

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
            <span className='username'>{userName.Username || 'Username'}</span>
            {/* NAV BUTTON FOR WISH LISTS */}
            <Link className='navLinks' to='/games'>
                <GiftFilled />
                <span>
                    Wish Lists</span>
            </Link>
            {/* NAV BUTTON FOR PROFILE */}
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
                    closable={false}>
                    <div className="logout-confirmMessage-content">
                        <span className='logout-message'>Are you sure you want to logout?</span>
                        <img className='character-logout-confirm' src={ char }/>
                    </div>
                    {/* YES AND NO BUTTONS */}
                    <div className="logoutConfirm-btns">
                        <Button onClick={handleCancel} >No</Button>
                        <Link to='/'>
                            <Button onClick={handleOk}>Yes</Button>
                        </Link>
                    </div>
                </Modal>
            </ConfigProvider>
            {/* LOGOUT */}
            <div className='navLinks'
            onClick={logoutConfirmModal}>
                <LogoutOutlined />
                <span>Logout</span>
            </div>
            <img className='web-logo' src={ Logo } alt="" />
        </div>
        <Outlet/>

    </>
}

export default NavBar;