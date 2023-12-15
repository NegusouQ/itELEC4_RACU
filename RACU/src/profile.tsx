import './profile.css'
import { Input, Button, Space, ConfigProvider, Modal, Avatar, Dropdown, Radio, Form, Menu,
Popconfirm, Image, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { EditOutlined, PlusOutlined, UploadOutlined,
  EllipsisOutlined } from '@ant-design/icons';
import profile from '../src/assets/images/23.png'
import Meta from 'antd/es/card/Meta';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//PROFILE OPTIONS
import profile1 from "../src/assets/images/18.png"
import profile2 from "../src/assets/images/19.png"
import profile3 from "../src/assets/images/20.png"
import profile4 from "../src/assets/images/21.png"
import profile6 from "../src/assets/images/23.png"
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { User } from './models/user';
import { getAvatar } from './services/common-service';
import axios from 'axios';
import TextArea from 'antd/es/input/TextArea';
import { Item } from './models/item';

const Profile: React.FC = () => {
  
  // INPUT FIELD TYPE FOR EDIT PROFILE
  type FieldTypeEditProfile = {
    username?: string;
    password?: string;
    fullName?: string;
    avatar?: number;
  }

  type FieldTypeItem = {
    title?: string;
    description?: string;
    image?: string;
  }

  /*const onFinishEditProfile = (values: any) => {

    values.userId = currentUser.id
    axios.put('https://localhost:7070/api/User', values)
      .then(response => {
        setIsModalOpen(false);
        console.log(response);
        message.success('Profile updated successfully!');
        loadList();
      })
      .catch(error => {
        console.error(error);
        message.error('Failed to update profile');
      });
  }*/


  const onFinishEditWish = (values: any) => {
    values.id = viewedItem.id
    values.userId = currentUser.id
    axios.put('https://localhost:7070/api/Item', values)
      .then(response => {
        setIsEditWishModalOpen(false)
        loadList()
      })

      message.success('Wishlist edited successfully!');

      handleEditWishOk();
  }

  const [viewedItem, setViewedItem] = useState(new Item)
  //const [viewedUser, setViewedUser] = useState(new User);

  // upload images
  const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

    // const { TextArea } = Input;
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Change:', e.target.value);
  };

  const [currentUser, setCurrentUser] = useState<User>(new User)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('current-user') ?? '')
    if(!user)
      return
    loadList(user.id)
  }, [])

  const loadList = (id: string = currentUser.id) => axios.get(`https://localhost:7070/api/User/${id}`)
    .then(response => {
      setCurrentUser(response.data)
      localStorage.setItem('current-user',  JSON.stringify(response.data))
    })
    .catch(error => console.error(error.error))

  const onDelete = (id: string) => axios.delete(`https://localhost:7070/api/Item/${id}`)
    .then(response => {
      loadList();
      message.success('Wishlist deleted successfully!');
    })
    .catch(error => {
      console.error(error.error);
      message.error('Failed to delete wish list');
    });

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

  // EDIT PROFILE MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditReviewModalOpen, setIsEditWishModalOpen] = useState(false);
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
  
  //EDIT WISH LIST MODAL
  const handleEditWish = (data: Item) => {
    setViewedItem(data)
    setIsEditWishModalOpen(true);
  };


  const handleEditWishOk = () => {
    setIsEditWishModalOpen(false);
  };

  const handleEditWishCancel = () => {
    setIsEditWishModalOpen(false);
  };

    return <>
    <div className="profile-main-container">
      {/*<div className='userProfile-container'>
        <div className='image-name-user'>
          <img className='user-prof' src={ getAvatar(currentUser.avatar) } alt="" />
          <div className="fullName-username-container">
            <h1 className='profile-fullName-banner'>{ currentUser.name }</h1>
            <span className='profile-user-Username'>{ currentUser.userName }</span>
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
          }}>
        <Button onClick={editProfile}><EditOutlined/>Edit Profile</Button>
      </ConfigProvider>
          
        </div>*/}
      <div className="ownWish-main-container">
        <div className="previous-wish-container">
          {/* WISH LIST CONTAINER */}
          <h3 style={{ color:'#660000', fontFamily:'Great Vibes', fontSize:'40px'}}>My Christmas Wish List</h3>
          {
              currentUser.items.map(data => {
                return (
                  <div className="user-ownWish-container">
                    <div className="user-details-ownWish">
                      <div style={{ display:'flex', width:'36em', flexDirection: 'row', alignItems:'end', justifyContent:'end'}}>
                        <ConfigProvider
                          theme={{
                            token: 
                              {
                              colorText: '#660000',
                              controlItemBgHover: '#ECE2D0'
                              },
                            }}>
                            {/* EDIT WISH LIST BUTTON */}
                            <Button type='text' onClick={() => handleEditWish(data)}><EditOutlined/>Edit</Button>
                            {/* DELETE WISH LIST BUTTON */}
                            <Button type='text'>
                              <Popconfirm title="Delete Wish List"
                                onConfirm={() => onDelete(data.id)}
                                description="Are you sure to delete this wish list?"
                                okText="Yes"
                                cancelText="No"
                                cancelButtonProps={{ style:{ color:'black' } }}>
                                <CloseOutlined style={{ marginRight:'5px' }}/>
                                  Delete
                              </Popconfirm>
                            </Button>
                        </ConfigProvider>
                      </div>
                    </div>
                    <div className="img-itemName">
                      {/* ITEM IMAGE */}
                      <Image className='wishlist-item-img' width={130} height={130} src={ data.image ?? "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" }/>
                      <div style={{ display:'flex', flexDirection:'column', marginLeft:'2em' }}>
                        {/* ITEM NAME */}
                        <span className='item-name-own'>{ data.title }</span>
                        {/* DESCRIPTION */}
                        <p className='ownWish-list-content'>
                          { data.description }
                        </p>
                      </div>
                    </div>         
                  </div>
                )
              })
            }  
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
            }}>

              {/*<Modal title="Edit Profile Information"
                open={isModalOpen}
                onOk={onFinishEditProfile}
                okText='Save'
                onCancel={handleCancel}
                width={650}
                closeIcon={<span style={{ color: '#660000' }}><CloseOutlined/></span>}>
                <Form className='editProfile-form' name='editProfile' autoComplete='off'>
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
                    }}>
                    
                    <Form.Item<FieldTypeEditProfile> name='avatar'
                    rules={[{ required: true, message: 'Please choose your avatar!' }]}>
                      <label className="select-prof-label" htmlFor="profile">Select Profile Picture</label>
                      <Radio.Group defaultValue={"a"} buttonStyle="solid" name="profile">
                        <Radio.Button className="profile-radio" value={1}><img className="radio-prof" src={ profile1 }/></Radio.Button>
                        <Radio.Button className="profile-radio" value={2}><img className="radio-prof" src={ profile2 }/></Radio.Button>
                        <Radio.Button className="profile-radio" value={3}><img className="radio-prof" src={ profile3 }/></Radio.Button>
                        <Radio.Button className="profile-radio" value={4}><img className="radio-prof" src={ profile4 }/></Radio.Button>
                        <Radio.Button className="profile-radio" value={5}><img className="radio-prof" src={ profile6 }/></Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </ConfigProvider>
                      
                    <Form.Item<FieldTypeEditProfile> name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input style={{ width:'24em' }} showCount maxLength={12} onChange={onChange} placeholder='Username'/>
                    </Form.Item>
                        
                    <Form.Item<FieldTypeEditProfile> name="fullName" rules={[{ required: true, message: 'Please input your full name!' }]}>
                    <Input style={{ width:'24em' }} showCount maxLength={25} onChange={onChange} placeholder='Full Name'/>
                    </Form.Item>
                        
                    <Form.Item<FieldTypeEditProfile> name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password style={{ width:'24em' }} placeholder='Password'/>
                    </Form.Item>
                </Form>
            </Modal>*/}

              {/* MODAL TO EDIT WISH LIST */}
            <Modal title="Edit Wish List"
              centered={true}
              visible={isEditReviewModalOpen}
              onOk={handleEditWishOk}
              onCancel={handleEditWishCancel}
              width={750}
              closable={true}
              maskClosable={false}
              destroyOnClose
              footer={null}
              // footer={[
              //   <Button key="cancel" onClick={handleEditWishCancel}>Cancel</Button>,
              //   <Button key="save" type="primary" onClick={handleEditWishOk}>Save</Button>,
              // ]}
              >
              {/* <h3 style={{ color:'#660000', fontFamily: 'Great Vibes', fontSize:'40px', lineHeight: 0}}>My Christmas Wish List</h3>
              <Input style={{ marginBottom:'10px'}} placeholder="Enter Item Name here." />
              <Input.TextArea placeholder='Enter your new wish list here.' value={reviewContent} onChange={(e) => setReviewContent(e.target.value)}
                rows={10} cols={60} showCount maxLength={500} style={{ marginBottom:'30px' }}/>
              <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card" fileList={fileList}
                onPreview={handlePreview} onChange={handleImgChange}>
                {fileList.length >= 1 ? null : uploadButton}
              </Upload> */}
              {/* VIEW AND DELETE IMAGE */}
              {/* <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleImgCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal> */}
              <Form name='add Item' autoComplete='off' className='addItem-form' onFinish={onFinishEditWish}>
                    {/* INPUT FOR ITEM NAME */}
                    <Form.Item<FieldTypeItem> name='title'
                      initialValue={viewedItem.title}
                      rules={[{ required: true, message: 'Please input item name' }]}>
                      <Input style={{width:'40em'}} placeholder="Enter Item Name here."/>
                    </Form.Item>
                      {/* INPUT FOR ITEM DESCRIPTION */}
                    <Form.Item<FieldTypeItem> name='description'
                      initialValue={viewedItem.description}
                      rules={[{ required: true, message: 'Please input item description' }]}>
                      <TextArea showCount maxLength={100} placeholder="Enter your christmas wish list here."
                        style={{ height: 220, width:'40em' , resize: 'none'}}
                        onChange={onChange}/>
                    </Form.Item>
                    {/* LIMITS UPLOAD TO 1 IMAGE ONLY */}
                    <Form.Item<FieldTypeItem> name='image'
                      initialValue={viewedItem.image}
                      rules={[{ required: true, message: 'Please enter image link' }]}>
                      <Input style={{width:'40em'}} placeholder="Enter image link here."/>
                    </Form.Item>
                    {/* <Form.Item<FieldTypeAddItem> name='image'
                      rules={[{ required: true, message: 'Please upload item image' }]}>
                      <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" 
                        listType="picture" maxCount={1}>
                        <Button style={{ marginRight:'29em'}} icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                      </Upload>
                    </Form.Item> */}
                    <Button htmlType="submit"
                      style={{ marginTop:'20px', width:'15em', borderRadius:'20px', backgroundColor:'#ECE2D0', color:'#660000', 
                      fontWeight:'700' }}>
                      Save
                    </Button>
              </Form>
            </Modal>
        </ConfigProvider>
      </div>
    </div>
  </>
}

export default Profile;