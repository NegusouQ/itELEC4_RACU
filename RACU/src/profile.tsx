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
                    colorPrimaryHover: '#0C0C0C'
                  },
                },
              }}
            >
            <Button ghost onClick={editProfile}><EditOutlined/>Edit Profile</Button>
            </ConfigProvider>
        </div>

            {/* MAIN CONTAINER FOR REVIEWS AND LIKED GAMES */}
      <div className="review-likedGames-main-container">
        <div className="previous-reviews-container">
          {/* REVIEW CONTAINER */}
          <div className="user-prevReviews">
            <div className="user-details-prevReviews">
              <div
              style={{ display:'flex', flexDirection: 'row', alignItems:'center', gap:'10px' }}
              >
              <Meta
                    avatar={<Avatar size={64} className='reviews-profile-avatar' src={ profile } />} />
                    <span className='profile-prevRev-username'>Username</span>
                    <span style={{ fontSize:'12px', marginLeft:'10px' }}>
                    <ClockCircleOutlined style={{ marginRight:'4px' }}/>3 days ago</span>
              </div>

                      <div className="edit-delete-prevReview">
                      <ConfigProvider
                        theme={{
                          token: {
                            colorBgElevated: '#424242',
                            colorText: 'white',
                            controlItemBgHover: '#0C0C0C'
                          },
                        }}
                      >

                        {/* DROPDOWN FOR EDIT OR DELETE REVIEW */}
                        <Dropdown
                          overlay={
                            <Menu>

                              {/* EDIT REVIEW */}
                              <Menu.Item key="1" onClick={handleEditReview}>
                                Edit Review
                              </Menu.Item>

                              {/* DELETE REVIEW */}
                              <Menu.Item key="2">
                              <Popconfirm
                                title="Delete Review"
                                description="Are you sure to delete this review?"
                                okText="Yes"
                                cancelText="No"
                                cancelButtonProps={{ style:{ color:'black' } }}
                              >
                                Delete Review
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

            <h3 className='reviews-GameName'>Game Name</h3>
                    
            <span className='prevReviews-profile-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>

              <div className="prevReviews-profile-likeCounter">
                <span className='prevReviews-likes'>
                <LikeFilled style={{ marginRight:'5px' }}/>
                  123</span>
              </div>

          </div>
          
        </div>

        <div className="profile-liked-games-container">
          <h3>Liked Games</h3>

            {/* INDIV GAME CONTAINER */}
          <div className="liked-games-container">
            <Meta
                    avatar={<Avatar size={64} className='liked-gameImg-avatar' src={ gameImg } />} />
                    <span className='profile-prevRev-username'>Example Game Name</span>
                    
          </div>


        </div>

        <ConfigProvider
          theme={{
            components: {
              Modal: {
                contentBg: '#1C1C1C',
                headerBg: '#1C1C1C',
                colorText: 'white',
                colorTextHeading: 'white'
              },
              Input: {
                colorText: 'white',
                colorBgContainer: 'BLACK',
                colorIcon: 'white',
                colorTextPlaceholder: 'white',
                colorTextDescription: 'white'
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
          closeIcon={<span style={{ color: 'white' }}><CloseOutlined/></span>}
          >
            <label htmlFor="profile">Select Profile Picture</label>
        <Radio.Group defaultValue="a" buttonStyle="solid" name="profile">
                <Radio.Button className="profile-radio" value="b"><img className="radio-prof" src={ profile1 }/></Radio.Button>
                <Radio.Button className="profile-radio" value="c"><img className="radio-prof" src={ profile2 }/></Radio.Button>
                <Radio.Button className="profile-radio" value="d"><img className="radio-prof" src={ profile3 }/></Radio.Button>
                <Radio.Button className="profile-radio" value="e"><img className="radio-prof" src={ profile4 }/></Radio.Button>
                {/* <Radio.Button className="profile-radio" value="f"><img className="radio-prof" src={ profile5 }/></Radio.Button> */}
                <Radio.Button className="profile-radio" value="g"><img className="radio-prof" src={ profile6 }/></Radio.Button>
              </Radio.Group>

            <div className="user-info-container-editProf">
              <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input showCount maxLength={12} onChange={onChange}/>
              </Form.Item>

              <Form.Item<FieldType>
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
              >
              <Input  showCount maxLength={25} onChange={onChange} />
              </Form.Item>

              <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please re-enter your password!' }]}
              >
              <Input.Password />
              </Form.Item>
            </div>
        </Modal>


        <Modal
        title="Edit Review"
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
            placeholder='Enter your new review here.'
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