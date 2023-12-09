import './profile.css'
import { Input, Button, Space, ConfigProvider, Modal, Avatar, Dropdown, Radio, Form, Menu,
Popconfirm, Image } from 'antd';
import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { EditOutlined, PlusOutlined, UploadOutlined,
  EllipsisOutlined } from '@ant-design/icons';
import profile from '../src/assets/images/23.png'
import Meta from 'antd/es/card/Meta';
//PROFILE OPTIONS
import profile1 from "../src/assets/images/18.png"
import profile2 from "../src/assets/images/19.png"
import profile3 from "../src/assets/images/20.png"
import profile4 from "../src/assets/images/21.png"
import profile6 from "../src/assets/images/23.png"
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/es/upload';

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

  // upload images
const getBase64 = (file: RcFile): Promise<string> =>
new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = (error) => reject(error);
});

const Profile: React.FC = () => {
// UPLOAD IMAGE
const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  
  ]);

  const handleImgCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleImgChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  //

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
              style={{ display:'flex', flexDirection: 'row', alignItems:'end',
                width:'45em', justifyContent:'end' }}
              >

                      {/* EDIT WISH LIST BUTTON */}
                <Button type='text' onClick={handleEditReview}><EditOutlined/>Edit</Button>

                <ConfigProvider
                        theme={{
                          token: {
                            // colorBgElevated: 'white',
                            colorText: '#660000',
                            controlItemBgHover: '#ECE2D0'
                          },
                        }}
                      >
                      {/* DELETE WISH LIST BUTTON */}
                        <Button type='text'>
                            <Popconfirm
                                title="Delete Wish List"
                                description="Are you sure to delete this wish list?"
                                okText="Yes"
                                cancelText="No"
                                cancelButtonProps={{ style:{ color:'black' } }}
                              >
                              <CloseOutlined style={{ marginRight:'5px' }}/>
                                Delete
                          </Popconfirm>
                        </Button>

                      </ConfigProvider>

                

              </div>

                      

            </div>
            <span
               className='item-name-own'>
                Sample Item Name
              </span>

              <div className="ownWish-list-img-withDescription">
                <Image
                  className='wishlist-item-img'
                  width={150}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                <p className='ownWish-list-content'>Genshin Impact is an open-world,
                  action role-playing game that allows the player to control one of four interchangeable characters in a party.
                    Switching between characters can be done quickly during combat,
                  allowing the player to use several different combinations of skills and attacks.</p>
              </div>

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



                {/* MODAL TO EDIT WISH LIST */}
            <Modal
            title="Edit Wish List"
            centered={true}
            visible={isEditReviewModalOpen}
            onOk={handleEditReviewOk}
            onCancel={handleEditReviewCancel}
            width={750}
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
          <h3
          style={{
            color:'#660000',
            fontFamily: 'Great Vibes',
            fontSize:'40px',
            lineHeight: 0
          }}>
            My Christmas Wish List</h3>

            <Input 
              style={{ 
                marginBottom:'10px'
               }}
              placeholder="Enter Item Name here." />

            {/* LIMITS UPLOAD TO 1 IMAGE ONLY */}
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleImgChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleImgCancel}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>

                <Input.TextArea
                  placeholder='Enter your new wish list here.'
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  rows={10}
                  cols={60}
                  showCount
                  maxLength={500}
                  style={{
                    marginBottom:'30px'
                  }}
                />
   
          </Modal>
        </ConfigProvider>
       
      </div>

      

    </div>
    </>
}

export default Profile;