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
import gift from '../src/assets/images/a-17.png'


// DELETE POST CONFIRMATION NOTIF
const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Wish List deleted Successfully!');
};


// TEXT AREA FOR GAME DESCRIPTION
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const { Meta } = Card;

const { Search } = Input;


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Games: React.FC = () => {


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
                    <h3 className='greeting-text'> Christmas Wish Lists</h3>
                    <Search
                    style={{ width:'400px'}}
                    placeholder="Search by Username" onSearch={onSearch} enterButton />
                </div>
                <img className='logo-home' src={ RACU }/>
                
          </div>



                                                     {/* ADD GAME BUTTON */}
        <Tooltip title="Create wish list" placement='left'>
          <FloatButton shape='circle' icon={<EditOutlined />} onClick={() => setAddWishOpen(true)}/>
        </Tooltip>



        <div className="wish-container-card">
          {/* wish (CARD) */}
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
              },
              token: {
                colorTextHeading: '#660000',
                colorTextDescription: 'white'
              },
            }}
          >

        {/* MODAL TO ADD NEW wish IN THE LIST */}
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
            <Card bordered={false} style={{ width:360, height: 'fit-content' }}
            hoverable={true}
            onClick={gameModal}>
              <div className="wish-card-content">
                
                <div
                style={{
                  display:'flex',
                  flexDirection:'row',
                  alignItems:'center',
                }}
                >
                <Meta
                  avatar={<Avatar size={64} className='wishUser-pic' src={ userProf } />}
                />
                  <span className='wish-users-name'>Username</span>
                </div>
                
                <img src={ gift } 
                style={{
                  width:'100%',
                  maxWidth:'5em'
                }} />
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

                                {/* wishlist content */}
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