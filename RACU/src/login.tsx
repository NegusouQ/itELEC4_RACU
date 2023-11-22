import { Button, Form, Input, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import logo from './assets/images/RACU.png'
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
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 1000 }}
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
    <h2>Welcome Back</h2>
            <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
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

            {/* <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Login
            </Button>
            </Form.Item>
            </div>

</ConfigProvider>

            <div className="login-poster">
            <img className='RACU-logo' src={ logo }/>
            <span>Don't have an account yet?</span>
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