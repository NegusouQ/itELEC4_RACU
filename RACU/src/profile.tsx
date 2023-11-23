import './profile.css'
import { Input, Button, Space, ConfigProvider,message, Upload} from 'antd';
import type { UploadProps } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { UploadOutlined, EditOutlined, ClockCircleOutlined, DeleteOutlined, SendOutlined, HeartOutlined, LikeFilled,
DislikeFilled } from '@ant-design/icons';
import profile from '../src/assets/images/12.png'

const { TextArea } = Input;

//TABS
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'COMMENTS',
    children:
    <div className='commenter-container'>
      <div className="commenter-details">
        <img className='commenter-prof' src={ profile } alt="" />
        <h3 className='commenter-name'>Commenter Name</h3>
        <span className='existing-post-time'><ClockCircleOutlined style={{ marginRight:'5px' }}/>10 mins. ago</span>
        <div className="heart-btn"  style={{ fontSize:'20px', color:'white', marginLeft:'33em', cursor:'pointer' }}>
          <span className='heart-counter'>12312</span>
          <HeartOutlined/>
        </div>
      </div>
      <div className="comment-container">
        <span className='commenter-comment'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
    </div>,
  },
  {
    key: '2',
    label: 'LIKES',
    children: <div className='likes-container'>
      <div className="reactor-container">
        <img className='commenter-prof' src={ profile } alt="" />
        <h3 className='commenter-name'>Commenter Name</h3>
        <h3 style={{ color: 'white', marginLeft:'10px' }}>liked your post.</h3>
        {/* <LikeFilled style={{ marginLeft:'40em', fontSize:'18px', color:'#0197FF' }}/> */}
      </div>
      <div className="reactor-container">
        <img className='commenter-prof' src={ profile } alt="" />
        <h3 className='commenter-name'>Commenter Name</h3>
        <h3 style={{ color: 'white', marginLeft:'10px' }}>liked your post.</h3>
        {/* <LikeFilled style={{ marginLeft:'40em', fontSize:'18px', color:'#0197FF' }}/> */}
      </div>
    </div>,
  },
  {
    key: '3',
    label: 'DISLIKES',
    children: <div className='dislikes-container'>
    <div className="reactor-container">
      <img className='commenter-prof' src={ profile } alt="" />
      <h3 className='commenter-name'>Commentesdasdasdr Name</h3>
      <h3 style={{ color: 'white', marginLeft:'10px' }}>disliked your post.</h3>
      {/* <DislikeFilled style={{ marginLeft:'38em', fontSize:'18px', color:'#0197FF' }}/> */}

    </div>
    <div className="reactor-container">
      <img className='commenter-prof' src={ profile } alt="" />
      <h3 className='commenter-name'>Commenter Name</h3>
      <h3 style={{ color: 'white', marginLeft:'10px' }}>disliked your post.</h3>
      {/* <DislikeFilled style={{ marginLeft:'38em', fontSize:'18px', color:'#0197FF' }}/> */}
    </div>
  </div>,
  },
];

//END OF TABS

const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const Profile: React.FC = () => {
    return <>
    <div className="profile-main-container">
        <div className='userProfile-container'>
            <div className='image-name-user'>
                <img className='user-prof' src={ profile } alt="" />
                <h1>Sample name here</h1>
            </div>
            <Button ghost><EditOutlined/>Edit Profile</Button>
        </div>

        <div className="profile-comment-section">
            <div className='profile-user-details'>
                <img className='user-comment-prof' src={ profile } alt="" />
                <h3>Croy croy</h3>
            </div>
                <div className="post-upload">
                        <ConfigProvider
                        theme={{
                            token: {
                                colorTextPlaceholder:'white',
                                colorText: 'white'
                            },
                        }}
                        >
                            
                        <Space.Compact className="post-textarea">
                            <TextArea rows={4} placeholder="Post your thoughts here!" bordered={false} />
                        </Space.Compact>
                        </ConfigProvider>
                </div>
                <div className='post-btns'>
                    <Upload className='upload-btn' {...props}>
                        <Button icon={<UploadOutlined />}>Upload photos</Button>
                    </Upload>
                    <Button className='post-btn' ghost>Post</Button>
                </div>
        </div>

        <div className="existing-post-container">
          <div className='profile-user-details'>
              <img className='user-comment-prof' src={ profile } alt="" />
              <h3>Croy croy</h3>
              <span className='existing-post-time'><ClockCircleOutlined style={{ marginRight:'5px' }}/>30 mins. ago</span>
              <div className="delete-btn">
              <DeleteOutlined style={{ fontSize:'20px', color:'white', marginLeft:'38em', cursor:'pointer' }} />
              </div>
          </div>
          <span className='existing-post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                         sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
          {/* TABS */}
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemColor: 'white',
                },
              },
            }}
          >
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ marginTop:'10px' }}/>
          </ConfigProvider>
          
          {/* COMMENT - USER CAN LEAVE A COMMENT */}
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

export default Profile;