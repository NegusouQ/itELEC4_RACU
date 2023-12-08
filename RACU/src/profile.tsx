import './profile.css'
import { Input, Button, Space, ConfigProvider, Modal, Avatar, Dropdown, Radio, Form, Menu,
Popconfirm } from 'antd';
import React, { useState } from 'react';
import gameImg from '../src/assets/images/genshin.png'
import { CloseOutlined } from '@ant-design/icons';
import { EditOutlined, ClockCircleOutlined, LikeFilled,
  EllipsisOutlined } from '@ant-design/icons';
import profile from '../src/assets/images/23.png'
import Meta from 'antd/es/card/Meta';
//PROFILE OPTIONS
import profile1 from "../src/assets/images/18.png"
import profile2 from "../src/assets/images/19.png"
import profile3 from "../src/assets/images/20.png"
import profile4 from "../src/assets/images/21.png"
import profile6 from "../src/assets/images/23.png"

// const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

// INPUT FIELD TYPE
  type FieldType = {
    username?: string;
    password?: string;
    confirmPassword?: string;
    remember?: string;
    fullName?: string;
  };

const Profile: React.FC = () => {
  // EDIT PROFILE MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditReviewModalOpen, setIsEditReviewModalOpen] = useState(false);
  const [reviewContent, setReviewContent] = useState('');

  const editProfile = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  //EDITE REVIEW
  const handleEditReview = () => {
    setIsEditReviewModalOpen(true);
    // Populate the review content in the state here
    // setReviewContent('Your review content goes here');
  };

  const handleEditReviewOk = () => {
    // Handle saving the edited review content
    setIsEditReviewModalOpen(false);
  };

  const handleEditReviewCancel = () => {
    setIsEditReviewModalOpen(false);
  };

    return <>
          {/* USER PROFILE BANNER */}
    <div className="profile-main-container">
        <div className='userProfile-container'>
            <div className='image-name-user'>
                <img className='user-prof' src={ profile } alt="" />
                <div className="fullName-username-container">
                  <h1 className='profile-fullName-banner'>Sample name here</h1>
                  <span className='profile-user-Username'>Username</span>
                </div>
            </div>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimaryHover: '#0C0C0C',
                    colorText:'#660000'
                  },
                },
              }}
            >
            <Button onClick={editProfile}><EditOutlined/>Edit Profile</Button>
            </ConfigProvider>
        </div>

            {/* MAIN CONTAINER FOR REVIEWS AND LIKED GAMES */}
      <div className="ownWish-main-container">

        <div className="previous-wish-container">
          {/* REVIEW CONTAINER */}
          <h3 
        style={{
          color:'#660000',
          fontFamily:'Great Vibes',
          fontSize:'40px'
        }}>My Christmas Wish List</h3>
          <div className="user-ownWish-container">
            <div className="user-details-ownWish">
              <div
              style={{ display:'flex', flexDirection: 'row', alignItems:'center', gap:'10px' }}
              >
              <Meta
                    avatar={<Avatar size={64} className='reviews-profile-avatar' src={ profile } />} />
                    <span className='profile-username'>Username</span>
              </div>

                      <div className="edit-delete-prevReview">
                      <ConfigProvider
                        theme={{
                          token: {
                            colorBgElevated: 'white',
                            colorText: '#660000',
                            controlItemBgHover: '#ECE2D0'
                          },
                        }}
                      >

                        {/* DROPDOWN FOR EDIT OR DELETE REVIEW */}
                        <Dropdown
                          overlay={
                            <Menu>

                              {/* EDIT REVIEW */}
                              <Menu.Item key="1" onClick={handleEditReview}>
                                Edit Wish List
                              </Menu.Item>

                              {/* DELETE REVIEW */}
                              <Menu.Item key="2">
                              <Popconfirm
                                title="Delete Wish List"
                                description="Are you sure to delete this wish list?"
                                okText="Yes"
                                cancelText="No"
                                cancelButtonProps={{ style:{ color:'black' } }}
                              >
                                Delete Wish List
                              </Popconfirm>
                              </Menu.Item>
                            </Menu>
                          }
                          placement="bottomRight"
                          trigger={['click']}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <EllipsisOutlined style={{ fontSize: '25px', marginRight: '10px' }} />
                            </Space>
                          </a>
                        </Dropdown>
                      </ConfigProvider>
                        
                      </div>
            </div>


            <span className='ownWish-profile-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>

       

          </div>

          <div className="user-ownWish-container">
            <div className="user-details-ownWish">
              <div
              style={{ display:'flex', flexDirection: 'row', alignItems:'center', gap:'10px' }}
              >
              <Meta
                    avatar={<Avatar size={64} className='reviews-profile-avatar' src={ profile } />} />
                    <span className='profile-username'>Username</span>
              </div>

                      <div className="edit-delete-prevReview">
                      <ConfigProvider
                        theme={{
                          token: {
                            colorBgElevated: 'white',
                            colorText: '#660000',
                            controlItemBgHover: '#ECE2D0'
                          },
                        }}
                      >

                        {/* DROPDOWN FOR EDIT OR DELETE REVIEW */}
                        <Dropdown
                          overlay={
                            <Menu>

                              {/* EDIT REVIEW */}
                              <Menu.Item key="1" onClick={handleEditReview}>
                                Edit Wish List
                              </Menu.Item>

                              {/* DELETE REVIEW */}
                              <Menu.Item key="2">
                              <Popconfirm
                                title="Delete Wish List"
                                description="Are you sure to delete this wish list?"
                                okText="Yes"
                                cancelText="No"
                                cancelButtonProps={{ style:{ color:'black' } }}
                              >
                                Delete Wish List
                              </Popconfirm>
                              </Menu.Item>
                            </Menu>
                          }
                          placement="bottomRight"
                          trigger={['click']}
                        >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              <EllipsisOutlined style={{ fontSize: '25px', marginRight: '10px' }} />
                            </Space>
                          </a>
                        </Dropdown>
                      </ConfigProvider>
                        
                      </div>
            </div>


            <span className='ownWish-profile-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>

       

          </div>
          
        </div>


        <ConfigProvider
          theme={{
            components: {
              Modal: {
                colorText: '#660000',
                colorTextHeading:'#660000'
              },
            
              Form: {
                labelColor: 'white',
                colorError: '#C877FF',
                colorErrorBorder:'#C877FF',
                colorErrorOutline: '#D28FFF',
              },
            },
            token: {
              
            },
          }}
        >
 {/* EDIT PROFIL MODAL */}
        <Modal title="Edit Profile Information"
        open={isModalOpen}
          onOk={handleOk}
          okText='Save'
          onCancel={handleCancel}
          width={650}
          closeIcon={<span style={{ color: '#660000' }}><CloseOutlined/></span>}
          >

            <ConfigProvider
              theme={{
                components: {
                  Radio: {
                    buttonBg:'#ECE2D0',
                    buttonSolidCheckedActiveBg: '#660000',
                    buttonSolidCheckedBg: '#660000',
                    buttonSolidCheckedHoverBg: '#660000',
                    buttonCheckedBg: '#660000',
                    colorPrimaryActive: '#ECE2D0',
                    colorPrimary: '#ECE2D0',
                    colorPrimaryHover:'#0C0C0C',
                    colorBorder: '#660000'
                  },
                },
              }}
            >
           <label className="select-prof-label" htmlFor="profile">Select Profile Picture</label>
                        <Radio.Group defaultValue="a" buttonStyle="solid" name="profile">
                          <Radio.Button className="profile-radio" value="b"><img className="radio-prof" src={ profile1 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="c"><img className="radio-prof" src={ profile2 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="d"><img className="radio-prof" src={ profile3 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="e"><img className="radio-prof" src={ profile4 }/></Radio.Button>
                          {/* <Radio.Button className="profile-radio" value="f"><img className="radio-prof" src={ profile5 }/></Radio.Button> */}
                          <Radio.Button className="profile-radio" value="g"><img className="radio-prof" src={ profile6 }/></Radio.Button>
                        </Radio.Group>
            </ConfigProvider>
            

            <div className="user-info-container-editProf">
              <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input showCount maxLength={12} onChange={onChange} placeholder='Username'/>
              </Form.Item>

              <Form.Item<FieldType>
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
              >
              <Input  showCount maxLength={25} onChange={onChange} placeholder='Full Name'/>
              </Form.Item>

              <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password placeholder='Password'/>
              </Form.Item>

              <Form.Item<FieldType>
              name="confirmPassword"
              rules={[{ required: true, message: 'Please re-enter your password!' }]}
              >
              <Input.Password placeholder='Confirm Password'/>
              </Form.Item>
            </div>
        </Modal>


        <Modal
        title="Edit Wish List"
        centered={true}
        visible={isEditReviewModalOpen}
        onOk={handleEditReviewOk}
        onCancel={handleEditReviewCancel}
        width={600}
        closable={false}
        maskClosable={false}
        destroyOnClose
        footer={[
          <Button key="cancel" onClick={handleEditReviewCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleEditReviewOk}>
            Save
          </Button>,
        ]}
      >
        <Form>
          <Form.Item>
            <Input.TextArea
            placeholder='Enter your new wish list here.'
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              rows={10}
              cols={60}
              showCount
                maxLength={500}
            />
          </Form.Item>
        </Form>
      </Modal>
        </ConfigProvider>
       
      </div>

      

    </div>
    </>
}

export default Profile;