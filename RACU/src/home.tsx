import './home.css'
import logo from '../src/assets/images/RACU.png'
import userProf from "../src/assets/images/16.png"
import { Button, FloatButton, Tooltip, ConfigProvider, Input, Modal, Space, Upload, Image } from 'antd';
import { EditOutlined, UploadOutlined, LikeOutlined, DislikeOutlined, SendOutlined  } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from 'react'
import type { UploadFile } from 'antd/es/upload/interface';

const { TextArea } = Input;

// UPLOAD IMAGES
const fileList: UploadFile[] = [
    {
      uid: '0',
      name: 'xxx.png',
      status: 'uploading',
      percent: 33,
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'zzz.png',
      status: 'error',
    },
  ];

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
            width={800}
            title="Create New Post"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <ConfigProvider
                theme={{
                    token: {
                        colorTextPlaceholder:'white',
                        colorText: 'white'
                    },
                }}
                >
            <Input placeholder="Enter Game Name" bordered={false} />
            </ConfigProvider>
            <TextArea rows={4} cols={50} placeholder='Write something here.' />
            {/* <Button ghost icon={<UploadOutlined />} 
            style={{ marginTop:'40px' }}>Upload photo</Button> */}
            <Upload 
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                defaultFileList={[...fileList]}
                >
                <Button ghost icon={<UploadOutlined />}
                style={{ marginTop: '20px' }}
                >Upload</Button>
                </Upload>
                <br />
                <br />
        </Modal>
    </ConfigProvider>
      
    
    <FloatButton.Group shape="circle" style={{ right: 44 }}>
      {/* <FloatButton icon={<QuestionCircleOutlined />} /> */}
      <Tooltip title="Write Post" placement='left'>
      <FloatButton icon={<EditOutlined />} onClick={showModal}/>
        </Tooltip>
        {/* <Tooltip title="Return to top" placement='left'>
      <FloatButton.BackTop visibilityHeight={0} />
        </Tooltip> */}
    </FloatButton.Group>


        <div className="home-main-container">
            <div className="greeting">
                <div className="text-greeting">
                    <h1 className='greeting-text' style={{ lineHeight:'0' }}>Welcome to RACU,</h1>
                    <h3> where every gamer's voice levels up the gaming experience!</h3>
                </div>
                <img className='logo-home' src={ logo }/>
            </div>

            <div className="post-container">
                <div className="user-details">
                    <div className="user-dets">
                        <img className='userProf-post' src={ userProf }/>
                        <h5 className='username-post'>Username</h5>
                    </div>
                    <div className="vote">
                    <Button ghost icon={<LikeOutlined />} style={{ marginRight:'5px' }}></Button>
                    <Button ghost icon={<DislikeOutlined />}></Button>
                    </div>
                </div>
                <h3>Example Game Name</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                         <Image
                            className='upload-img'
                            width={200}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                         {/* <Input placeholder="Leave Comment" /> */}
                         <ConfigProvider
                            theme={{
                                token: {
                                    colorTextPlaceholder:'white',
                                    colorText: 'white'
                                },
                            }}
                            >
                                <Space.Compact style={{ width: '100%', marginTop:'20px' }}>
                                    <Button ghost type="primary"><SendOutlined /></Button>
                                    <Input placeholder="Leave a comment" bordered={false} />
                                </Space.Compact>
                        </ConfigProvider>
                         
            </div>
        </div>
    </>
}

export default Home;