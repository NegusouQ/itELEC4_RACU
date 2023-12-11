import './games.css'
import avatar1 from '../src/assets/images/18.png'
import avatar2 from '../src/assets/images/19.png'
import avatar3 from '../src/assets/images/20.png'
import avatar4 from '../src/assets/images/21.png'
import avatar5 from '../src/assets/images/23.png'

import React, { useEffect, useState } from 'react';
import { Input, Upload, ConfigProvider, Modal, Button, Tooltip, FloatButton, Space, Image, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type { SearchProps } from '../Search';
import { Avatar, Card } from 'antd';
import { EditOutlined, SmileOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { message } from 'antd';
import gift from '../src/assets/images/a-17.png'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
// 1 - Install
import axios from 'axios';
import { Item } from './models/item'


// DELETE POST CONFIRMATION NOTIF
const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Wish List deleted Successfully!');
};

// TEXT AREA FOR Item DESCRIPTION
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const { Meta } = Card;

const { Search } = Input;

//search
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

// upload images
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const Games: React.FC = () => {

  // 2 - Initialize
  const [items, setItems] = useState<Item[]>([])
  const [viewedItem, setViewedItem] = useState(new Item)

  // 3 - Call & Receive response from Api
  useEffect(() => {
    axios.get('https://localhost:7070/api/Item')
      .then(response => setItems(response.data))
      .catch(error => console.error(error.error))
  }, [])

  const getAvatar = (id: number) => id == 1 ? avatar1 : id == 2 ? avatar2 : id == 3 ? avatar3 : id == 4 ? avatar4 : avatar5

  // UPLOAD``
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

    // MODALS
    // SHOW wish DESCRIPTION
    const [isModalOpen, setIsModalOpen] = useState(false);

    const wishModal = (data: any) => {
      setViewedItem(data)
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      console.log('closed')
      setIsModalOpen(false);
    };

    // ADD wish list MODAL
    const [addWishOpen, setAddWishOpen] = useState(false);

    return <>

      <div className="wish-main-container">
        <div className="greeting">
          <div className="text-greeting">
            <h3 className='greeting-text'> Christmas Wish Lists</h3>
            <Search style={{ width:'400px'}} placeholder="Search by Username" onSearch={onSearch} enterButton />
          </div>
        </div>
          {/* ADD wish list BUTTON */}
        <Tooltip title="Create wish list" placement='left'>
          <FloatButton shape='circle' icon={<EditOutlined />} onClick={() => setAddWishOpen(true)}/>
        </Tooltip>

        <div className="wish-container-card">
          {/* wish (CARD) */}
          <ConfigProvider
            theme={{
              components: {
                Card: {
                colorBgContainer: '#890000',
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
            }}>

            {/* MODAL TO ADD NEW wish IN THE LIST */}
            <Modal title="My Christmas Wish List"
              open={addWishOpen}
              onOk={() => setAddWishOpen(false)}
              onCancel={() => setAddWishOpen(false)}
              okText='Post'
              centered={true}
              width={700}>
                {/* ITEM NAME INPUT */}
              <Space direction="vertical" style={{ width: '100%' }} size="large">
                <Input placeholder="Enter Item Name here." />
              </Space>
                {/* INPUT FOR ITEM DESCRIPTION */}
              <TextArea showCount maxLength={500} placeholder="Enter your christmas wish list here."
                style={{ height: 220, resize: 'none', marginBottom:'20px', marginTop:'20px' }}
                onChange={onChange}
              />
              {/* LIMITS UPLOAD TO 1 IMAGE ONLY */}
              <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" listType="picture" maxCount={1}>
                  <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
              </Upload>
            </Modal>

                   {/* wish CARD */}
                {
                  items.map((data: any, id) => {
                    return (
                      <Card bordered={false} style={{ width:360, height: 'fit-content' }}
                        hoverable={true}
                        onClick={ () => wishModal(data)}>
                        <div className="wish-card-content">
                          {/* USER AVATAR */}
                          <div style={{ display:'flex', flexDirection:'row', alignItems:'center',}}>
                            <Meta avatar={<Avatar size={64} className='wishUser-pic' src={ getAvatar(data.user.avatar) } />}/>
                            <span className='wish-users-name'>{ data.user.name }</span>
                          </div>
                          <img src={ gift } style={{ width:'100%', maxWidth:'5em'}} />
                        </div>
                      </Card>
                    )
                  })
                }

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
              closeIcon={<span style={{ color: '#660000' }}><CloseOutlined/></span>}>
              <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                {/* ITEM DETAILS */}
                <div className="img-itemName">
                  {/* ITEM IMAGE */}
                  <Image className='wishlist-item-img' width={130} height={130} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                  <div style={{ display:'flex', flexDirection:'column', marginLeft:'2em'}}>
                    {/* ITEM NAME */}
                    <span className='item-name-own'>{ viewedItem.title }</span>
                      {/* ITEM DESCRIPTION */}
                      <p className='ownWish-list-content'>{ viewedItem.description }</p>
                  </div>
                </div>
                      {/* BUTTONS */}
                <div className="wish-buttons-container">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorBgElevated: '#660000',
                        colorText: 'white',
                        colorTextHeading: 'white'
                      },
                    }}>
                  </ConfigProvider>
                </div>
              </div>
            </Modal>
          </ConfigProvider>
        </div>
      </div>
    </>
}

export default Games;