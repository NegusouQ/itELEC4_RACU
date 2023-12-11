import { Button, Form, Input, ConfigProvider, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons'
import { Link, useNavigate } from "react-router-dom";
import logo from './assets/images/a-14.png'
import './login.css'
import axios from 'axios';

const Login: React.FC = () => {

  type FieldType = {
    userName?: string;
    password?: string;
  }

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    axios.get(`https://localhost:7070/api/User?Username=${values.userName}&Password=${values.password}`, values)
        .then(response => {
          if(!response.data) {
            console.log('Invalid username or password.')
            return 
          }
          navigate("/games")
        })
        .catch(error => console.error(error.error))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }
  
    return (
        <Form name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
            <ConfigProvider
              theme={{
                components: {
                  Form: {
                        labelColor: 'white',
                        colorError: '#C877FF',
                        colorErrorBorder:'#C877FF',
                        colorErrorOutline: '#D28FFF',
                  },
                },
              }}>
              <div className="login-form">
                <h2>Log in and let the Christmas wishes begin!</h2>
                <div className='login-form-container'>
                  {/* USERNAME INPUT */}
                  <Form.Item<FieldType>
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder='Username' />
                  </Form.Item>
                    {/* PASSWORD INPUT */}
                  <Form.Item<FieldType> name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password placeholder='Password'/>
                  </Form.Item>
                </div>
                {/* LOGIN BUTTON */}
                <Button htmlType="submit"
                  style={{ marginTop:'20px', width:'15em', borderRadius:'20px', backgroundColor:'#ECE2D0', color:'#660000', fontFamily:'Mountains of Christmas',
                  fontWeight:'700' }}>
                  Login
                </Button>
              </div>
            </ConfigProvider>

            <div className="login-poster">
              <img className='RACU-logo' src={ logo }/>
              <span className='reg-text'>Don't have an account yet?</span>
              <Link to='/register'>
                <Button type='text'style={{ color: '#660000', width: '13em', height:'fit-content', fontWeight: '900', fontFamily:'Mountains of Christmas', fontSize:'20px'}}>
                  Click here to Register
                </Button>
              </Link>
            </div>
        </Form>
      );
};

export default Login;