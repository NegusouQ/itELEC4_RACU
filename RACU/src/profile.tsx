import './profile.css'
import { Input, Button, Space, ConfigProvider,message, Upload} from 'antd';
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import profile from '../src/assets/images/12.png'

const { TextArea } = Input;

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
        <div className='profile-container'>
            <div className='image-name-user'>
                <img className='user-prof' src={ profile } alt="" />
                <h1>Sample name here</h1>
            </div>
            <Button>Edit Profile</Button>
        </div>

        <div className="profile-comment-section">
            <div className='user-details'>
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
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <Button className='post-btn' ghost>Post</Button>
                </div>
                
        </div>
    </div>
    </>
}

export default Profile;