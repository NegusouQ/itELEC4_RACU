import './profile.css'
import { Input, Button, Space, ConfigProvider,message, Upload, Avatar, Dropdown} from 'antd';
import type { MenuProps, UploadProps } from 'antd';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import gameImg from '../src/assets/images/genshin.png'
import { EditOutlined, ClockCircleOutlined, LikeFilled,
  EllipsisOutlined } from '@ant-design/icons';
import profile from '../src/assets/images/23.png'
import Meta from 'antd/es/card/Meta';



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

const { TextArea } = Input;

//TABS
const onChange = (key: string) => {
  console.log(key);
};



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
          {/* USER PROFILE BANNER */}
    <div className="profile-main-container">
        <div className='userProfile-container'>
            <div className='image-name-user'>
                <img className='user-prof' src={ profile } alt="" />
                <h1 className='profile-username-banner'>Sample name here</h1>
            </div>
            <Button ghost><EditOutlined/>Edit Profile</Button>
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
      </div>

      

    </div>
    </>
}

export default Profile;