import './games.css'
import gamePic from "../src/assets/images/genshin.png"
import userProf from '../src/assets/images/16.png'
import React, { useEffect, useRef, useState } from 'react';
import RACU from '../src/assets/images/RACU.png'
import { TweenOneGroup } from 'rc-tween-one';
import type { InputRef } from 'antd';
import { Input, Space, Tag, ConfigProvider, Modal, Button, theme, Tooltip, FloatButton } from 'antd';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Typography } from 'antd';
import type { SearchProps } from '../Search';
import { DownloadOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { LoadingOutlined, PlusOutlined, ClockCircleOutlined, LikeOutlined, LikeFilled, EditOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import Profile from './profile';
// import Profile from './profile';


// TAG CATEGORIES
const { CheckableTag } = Tag;

const tagsData = ['Adventure', 'FPS', 'RPG', 'Simulation', 'Strategy', 'Survival & Horror', 'Platformers',
'Sports & Fitness', 'Fighting', 'Web3 Games', 'Augmented Reality', 'Educational', 'Puzzlers & Party Games', 'Stealth'];

//

// TEXT AREA FOR GAME DESCRIPTION
const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};
//

// upload
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


//
const { Meta } = Card;


// dropdown
const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Edit Post',
    },
    {
      key: '2',
      label: 'Delete Post',
    },
  ];



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
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };


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

    // ADD GAME MODAL

    const [addGameOpen, setAddGameOpen] = useState(false);
    // END OF MODAL

    // REVIEWS MODAL
    const [reviewsModalOpen, setReviewsModalOpen] = useState(false);
    

    // UPLOAD IMAGE
    const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const UPLOAD: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  //END OF UPLOAD IMAGE


    return <>
            
        <div className="games-main-container">
          <div className="greeting">
                <div className="text-greeting">
                    <h1 className='greeting-text' style={{ lineHeight:'0' }}>Welcome to RACU,</h1>
                    <h3> where every gamer's voice levels up the gaming experience!</h3>
                </div>
                <img className='logo-home' src={ RACU }/>
          </div>
        <ConfigProvider
        theme={{
            token: {
                colorBgContainer: 'transparent',
                colorText: 'white',
                colorTextPlaceholder: 'white'
            },
        }}
        >
            <Space direction="horizontal" style={{  marginTop:'30px' }}>
                    <Search
                    style={{ width:'500px', marginRight: '50px' }}
                    placeholder="Search by Game name" onSearch={onSearch} enterButton />


                <span style={{ marginRight: 8, color:'#0197FF', fontWeight:'800' }}>Genres:</span>
                  <Space size={[0, 8]} wrap>
                    {tagsData.map((tag) => (
                      <CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                  </Space>
                
            </Space>
        </ConfigProvider>


                                                     {/* ADD GAME BUTTON */}
        <Tooltip title="Add Game" placement='left'>
          <FloatButton shape='square' type='primary' icon={<EditOutlined />} onClick={() => setAddGameOpen(true)}/>
        </Tooltip>



        <div className="games-container-card">
          {/* GAMES (CARD) */}
          <ConfigProvider
            theme={{
              components: {
                Card: {
                  extraColor: 'white',
                colorBgContainer: '#1C1C1C',

                },
                Modal: {
                  contentBg: '#1C1C1C',
                  headerBg: '#1C1C1C',
                  colorText: 'white',
                },
                Input: {
                  activeBg: '#0C0C0C',
                  colorBgContainer: '#0C0C0C',
                  colorText:'white',
                  colorTextPlaceholder: 'white'
                },
                Tag: {
                  defaultColor:'#0197FF'
                },
              },
              token: {
                colorTextHeading: 'white',
                colorTextDescription: 'white'
              },
            }}
          >

{/* MODAL TO ADD NEW GAME IN THE LIST */}
<Modal
          title="Add Game"
          open={addGameOpen}
          onOk={() => setAddGameOpen(false)}
          onCancel={() => setAddGameOpen(false)}
          okText='Post'
          centered={true}
          width={700}
        >
          {/* GAME NAME */}
          <Input placeholder="Enter game name" bordered={true} 
          style={{ marginBottom: '10px' }}/>

          <div className="uploadImage-tags-container">
            {/* UPLOAD IMAGE  */}
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                beforeUpload={beforeUpload}
                onChange={UPLOAD}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
              <span>Genre:</span>
              <Space size={[0, 8]} wrap>
                    {tagsData.map((tag) => (
                      <CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                      >
                        {tag}
                      </CheckableTag>
                    ))}
                  </Space>
          </div>
          


                                {/* DESCRIPTION */}
          <TextArea
            showCount
            maxLength={500}
            onChange={onChange}
            placeholder="Enter game description here."
            style={{ height: 220, resize: 'none', marginBottom:'20px', marginTop:'20px' }}
          />
        </Modal>

            <Card bordered={false} style={{ width: 300, height: 140 }}
            hoverable={true}
            onClick={gameModal}>
              <Meta
                avatar={<Avatar size={64} className='gameThumbnail' src={ gamePic } />}
                title="Gensin Impact"
                description="open-world role-playing game (or RPG)"
              />
              <div className="game-like-counter">
              <LikeFilled/>
              <p>1243</p>
              </div>
            </Card>

            {/* GAME DESCRIPTION MODAL */}
            <Modal title="Genshin Impact" 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            width={650}
            centered={true}
            okText='Close'
            footer={null}
            closeIcon={<span style={{ color: 'white' }}><CloseOutlined/></span>}
            >
          <div className="game-description-container">
            <img
            style={{ width: '100%', maxWidth: '10em', height: '10em', borderRadius:'10px' }}
            src={ gamePic } alt="" />
            {/* <Divider orientation="left">Custom</Divider> */}
              <div className="category-game">
                <Space size={[0, 8]} wrap>
                  <Tag color="#f50">Video game</Tag>
                  <Tag color="#2db7f5">Adventure game</Tag>
                  <Tag color="#87d068">Action role-playing game</Tag>
                </Space>
                <div className="game-buttons-container">
                  <Button type="primary" href='https://genshin.hoyoverse.com/en/' shape="round" icon={<DownloadOutlined />}>
                    Download
                  </Button>
                  <Button ghost onClick={() => setReviewsModalOpen(true)}>Reviews</Button>
                  {/* LIKE BUTTON */}
                  <Button ghost>
                    <span className='game-likeCounter'>123</span>
                    <LikeOutlined/>
                    </Button>
                  {/* <Button ghost><DislikeOutlined/></Button> */}
                  <div className="edit-delete-dropdown">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorBgElevated: '#0C0C0C',
                        controlItemBgHover: '#1C1C1C',
                        colorText: 'white'
                      },
                    }}
                  >
                    <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <Tooltip title="Click to edit or delete post">
                          <EllipsisOutlined style={{ fontSize: '25px', marginLeft:'20px' }}/>
                        </Tooltip>
                      </Space>
                    </a>
                  </Dropdown>
                  </ConfigProvider>
                  
                  </div>
                </div>

              </div>

          </div>
          <div className="gamePost-user-details">
            <Meta
            style={{ display: 'flex',  flexDirection: 'row', alignItems: 'center', gap: '10px' }}
                  avatar={<Avatar size={44} className='userAvatar' src={ userProf } />}
                  title="Username"/>
                  <p className='gamePost-date-time'><ClockCircleOutlined style={{ marginRight:'5px' }}/>1 day ago</p>
          </div>
          <p className='game-description'>Genshin Impact is an open-world,
             action role-playing game that allows the player to control one of four interchangeable characters in a party.
              Switching between characters can be done quickly during combat,
             allowing the player to use several different combinations of skills and attacks.</p>
        </Modal>


        {/* REVIEWS */}
        <Modal
          title="Game Reviews"
          open={reviewsModalOpen}
          onOk={() => setReviewsModalOpen(false)}
          onCancel={() => setReviewsModalOpen(false)}
          width={1200}
          centered={true}
          closeIcon={<span style={{ color: 'white' }}><CloseOutlined/></span>}    
          footer={null}
          >
          <div className="modal-main-container">
          <div className="gameReviews-container">

            {/* INDIV REVIEW */}
            <div className="userReview-container">
              <div className="review-userDets">
                <div
                style={{ display:'flex', alignItems:'center', gap:'10px' }}
                >
                  <img src={userProf} className='commenter-reviews-prof'/>
                  <span>Username</span>
                </div>
                <div className="review-like-btn">
                  <Button ghost>
                    <span className='review-likeCounter'>123</span>
                <LikeOutlined/>
                </Button>
                </div>
              </div>
              <span className='review-text-content'>Genshin Impact is an open-world,
              action role-playing game that allows the player to control one of four interchangeable characters in a party.
                Switching between characters can be done quickly during combat,
              allowing the player to use several different combinations of skills and attacks.</span>
              </div>
          </div>


          <div className="writeReview-container">
            {/* <span 
            style={{ fontSize: '25px', fontWeight: '700' }}
            >
              Give Review</span> */}
              <TextArea
                showCount
                maxLength={500}
                onChange={onChange}
                placeholder="Write your thoughts here."
                style={{ height: 320, resize: 'none', marginBottom:'20px' }}
              />
              <Button ghost
                style={{ marginTop: '10em', marginLeft:'20em' }}
              >Post Review</Button>
          </div>
          </div>
          
        </Modal>

          </ConfigProvider>
        
        </div>
        

        

        
        </div>
    </>
}

export default Games;