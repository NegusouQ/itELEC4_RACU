import './profile.css'
import { Input, Button, Space, ConfigProvider,message, Modal, Avatar, Dropdown, Radio, Form} from 'antd';
import React, { useState } from 'react';
import type { MenuProps, UploadProps } from 'antd';
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


// dropdown
const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Edit Review',
  },
  {
    key: '2',
    label: 'Delete Review',
  },
];
//

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

  const editProfile = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return <>
          {/* USER PROFILE BANNER */}
    <div className="profile-main-container">
        <div className='userProfile-container'>
            <div className='image-name-user'>
                <img className='user-prof' src={ profile } alt="" />
                <h1 className='profile-username-banner'>Sample name here</h1>
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
                        <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']} >
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              {/* <Tooltip title="Click to edit or delete post"> */}
                                <EllipsisOutlined style={{ fontSize: '25px', marginRight:'10px' }}/>
                              {/* </Tooltip> */}
                            </Space>
                          </a>
                        </Dropdown>
                      </ConfigProvider>
                        
                      </div>
            </div>

            <h4 className='reviews-GameName'>Game Name</h4>
                    
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
          <h4>Liked Games</h4>

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
              <Input />
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
        </ConfigProvider>
       
      </div>

      

    </div>
    </>
}

export default Profile;