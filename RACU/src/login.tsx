import { Button, Form, Input, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import logo from './assets/images/RACU(LOGO).png'
import './login.css'

const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

const Login: React.FC = () => {

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
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
  }}
>
<div className="login-form">
    <h2>Login to your account</h2>
           <div className='login-form-container'>
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input
              placeholder='Username' />
              </Form.Item>

              <Form.Item<FieldType>
              // label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password 
              placeholder='Password'/>
              </Form.Item>

              {/* <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 4, span: 16 }}
              >
              <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

              
           </div>
           <Link to='/games'>
              <Button type="primary" htmlType="submit"
              style={{ marginTop:'20px', width:'20em', borderRadius:'20px' }}>
                  Login
              </Button>
              </Link>
            </div>

</ConfigProvider>

            <div className="login-poster">
              <img className='RACU-logo' src={ logo }/>
              <span className='reg-text'>Don't have an account yet?</span>
              <Link to='/register'>
              <Button type='text'
              style={{ color: 'white', width: '15em', fontWeight: '900' }}>
                  Click here to Register</Button>
                </Link>
            </div>

            
        </Form>
      );
};

export default Login;