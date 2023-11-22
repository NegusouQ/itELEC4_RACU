import './home.css'
import logo from '../src/assets/images/RACU.png'
import { FloatButton, Tooltip, ConfigProvider, Input, Modal, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react'

const { TextArea } = Input;

const Home: React.FC = () => {

    const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

    return <>

    <ConfigProvider
    theme={{
        components: {
        Modal: {
            contentBg: '#363636',
            headerBg: '#363636',
            titleColor: 'white'
        },
        },
    }}
    >
        <Modal
            title="Create New Post"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <TextArea rows={4} cols={50} placeholder='Write something here.' />
        </Modal>
    </ConfigProvider>
      
    
    <FloatButton.Group shape="circle" style={{ right: 24 }}>
      {/* <FloatButton icon={<QuestionCircleOutlined />} /> */}
      <Tooltip title="Write Post" placement='left'>
      <FloatButton icon={<EditOutlined />} onClick={showModal}/>
        </Tooltip>
        <Tooltip title="Return to top" placement='left'>
      <FloatButton.BackTop visibilityHeight={0} />
        </Tooltip>
    </FloatButton.Group>


        <div className="home-main-container">
            <div className="greeting">
                <div className="text-greeting">
                    <h1 className='greeting-text' style={{ lineHeight:'0' }}>Welcome to RACU,</h1>
                    <h3> where every gamer's voice levels up the gaming experience!</h3>
                </div>
                <img className='logo-home' src={ logo } alt="" />
            </div>

            <div className="post-container">
              <div className='comment-section'>
              <Typography>
                My comment here test
              </Typography>
              </div>
            </div>

        </div>
    </>
}

export default Home;