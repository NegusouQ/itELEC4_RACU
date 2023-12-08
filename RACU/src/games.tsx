import './games.css'
import userProf from '../src/assets/images/21.png'
import React, { useState } from 'react';
import RACU from '../src/assets/images/a-14.png'
import { Input, Space, Tag, ConfigProvider, Modal, Button, Tooltip, FloatButton, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { SearchProps } from '../Search';
import { Avatar, Card } from 'antd';
import { EditOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { message } from 'antd';
// import type { UploadChangeParam } from 'antd/es/upload';
// import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
// import Profile from './profile';


// DELETE POST CONFIRMATION NOTIF
const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Wish List deleted Successfully!');
};

// TAG CATEGORIES
// const { CheckableTag } = Tag;

// const tagsData = ['Adventure', 'FPS', 'RPG', 'Simulation', 'Strategy', 'Survival & Horror', 'Platformers',
// 'Sports & Fitness', 'Fighting', 'Web3 Games', 'Augmented Reality', 'Educational', 'Puzzlers & Party Games', 'Stealth'];

//

// TEXT AREA FOR GAME DESCRIPTION
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};
//

// upload
// const getBase64 = (img: RcFile, callback: (url: string) => void) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result as string));
//   reader.readAsDataURL(img);
// };

// const beforeUpload = (file: RcFile) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };


//
const { Meta } = Card;



const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1677ff',
//     }}
//   />
// );

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Games: React.FC = () => {
  
  // TAGS
  // const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  // const handleChange = (tag: string, checked: boolean) => {
  //   const nextSelectedTags = checked
  //     ? [...selectedTags, tag]
  //     : selectedTags.filter((t) => t !== tag);
  //   console.log('You are interested in: ', nextSelectedTags);
  //   setSelectedTags(nextSelectedTags);
  // };


    // MODAL
    // SHOW GAME DESCRIPTION
    const [isModalOpen, setIsModalOpen] = useState(false);

    const gameModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    // ADD wish list MODAL

    const [addWishOpen, setAddWishOpen] = useState(false);

    

    // EDIT wish list MODAL
    const [editWishOpen, setEditWishOpen] = useState(false);



    return <>
            
        <div className="wish-main-container">
          <div className="greeting">
                <div className="text-greeting">
                    <h3 className='greeting-text'> Welcome back to the festive fun!</h3>
                </div>
                <img className='logo-home' src={ RACU }/>
          </div>
        <ConfigProvider
        theme={{
            token: {
                colorBgContainer: 'transparent',
                // colorTextPlaceholder: 'white'
            },
        }}
        >
            <Space direction="horizontal" style={{  marginTop:'30px', marginBottom:'20px' }}>
                    <Search
                    style={{ width:'500px', marginRight: '50px' }}
                    placeholder="Search by Username" onSearch={onSearch} enterButton />

                
            </Space>
        </ConfigProvider>


                                                     {/* ADD GAME BUTTON */}
        <Tooltip title="Create wish list" placement='left'>
          <FloatButton shape='circle' icon={<EditOutlined />} onClick={() => setAddWishOpen(true)}/>
        </Tooltip>



        <div className="wish-container-card">
          {/* GAMES (CARD) */}
          <ConfigProvider
            theme={{
              components: {
                Card: {
                colorBgContainer: '#660000',
                },
                Modal: {
                  contentBg: 'white',
                  headerBg: 'white',
                  colorText: '#660000',
                  fontFamily: 'Great Vibes',
                  fontSizeHeading5: 40
                },
                // Input: {
                //   activeBg: 'white',
                //   colorBgContainer: '#0C0C0C',
                //   colorText:'white',
                //   colorTextPlaceholder: 'white'
                // },
                Tag: {
                  defaultColor:'#0197FF'
                },
              },
              token: {
                colorTextHeading: '#660000',
                colorTextDescription: 'white'
              },
            }}
          >

{/* MODAL TO ADD NEW GAME IN THE LIST */}
<Modal
          title="My Christmas Wish List"
          open={addWishOpen}
          onOk={() => setAddWishOpen(false)}
          onCancel={() => setAddWishOpen(false)}
          okText='Post'
          centered={true}
          width={700}
        >
          <TextArea
            showCount
            maxLength={500}
            onChange={onChange}
            placeholder="Enter your christmas wish list here."
            style={{ height: 220, resize: 'none', marginBottom:'20px', marginTop:'20px' }}
          />
        </Modal>


                              {/* wish CARD */}
            <Card bordered={false} style={{ width: 300, height: 'fit-content' }}
            hoverable={true}
            onClick={gameModal}>
              <div className="wish-card-content">
                <Meta
                  avatar={<Avatar size={64} className='wishUser-pic' src={ userProf } />}
                />
                <div>
                  <span className='wish-users-name'>Username</span>
                </div>
              </div>
            </Card>


{/* POPS UP AFTER THE USER CLICKS THE wish list card */}
            {/* wish list DESCRIPTION MODAL */}
            <Modal title="Christmas Wish List" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            width={750}
            centered={true}
            okText='Close'
            footer={null}
            closeIcon={<span style={{ color: '#660000' }}><CloseOutlined/></span>}
            >
          <div className="wish-description-container">
            <img
            style={{ width: '100%', maxWidth: '10em', height: '10em', borderRadius:'10px' }}
            src={ userProf } alt="" />
            <span className='username-wishlist'>Username</span>
          </div>

          <p className='wish-list-content'>Genshin Impact is an open-world,
             action role-playing game that allows the player to control one of four interchangeable characters in a party.
              Switching between characters can be done quickly during combat,
             allowing the player to use several different combinations of skills and attacks.</p>

                <div className="wish-buttons-container">
                    <ConfigProvider
                      theme={{
                        token: {
                          colorBgElevated: '#660000',
                          colorText: 'white',
                          colorTextHeading: 'white'
                        },
                      }}
                    >
                          {/* DELETE POST CONFIRMATION */}
                    <Popconfirm
                      okText='Yes'
                      cancelText="No"
                      cancelButtonProps={{ style:{ color:'black' } }}
                      title="Delete Post"
                      description="Are you sure to delete this post?"
                      onConfirm={confirm}
                      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    >
                      <Button danger>Delete Wish List</Button>
                    </Popconfirm>
                    </ConfigProvider>
                    
                    <Button onClick={() => setEditWishOpen(true)}>Edit</Button>
                </div>
        </Modal>



              {/* EDIT wish MODAL */}
              <Modal
              title="Edit Wish List"
              okText='Save'
              open={editWishOpen}
              onOk={() => setEditWishOpen(false)}
              onCancel={() => setEditWishOpen(false)}
              width={750}
              centered={true}
              closeIcon={<span style={{ color: 'white' }}><CloseOutlined/></span>}    
              >

                                {/* DESCRIPTION */}
          <TextArea
            showCount
            maxLength={500}
            onChange={onChange}
            placeholder="Enter your wish list here."
            style={{ height: 220, resize: 'none', marginBottom:'20px', marginTop:'20px' }}
          />
              </Modal>

          </ConfigProvider>
        
        </div>
        
        </div>
    </>
}

export default Games;