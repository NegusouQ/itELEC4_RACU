import { Link } from "react-router-dom";
import registerPoster from '../src/assets/images/register.png'
import { Button, Form, Input, ConfigProvider } from 'antd';
import './register.css'

const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    confirmPassword?: string;
    remember?: string;
    fullName?: string;
  };

const Register: React.FC = () => {
    return <>
        <Form
            name="basic"
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 1000 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

        <div className="login-poster">
            <img className="poster" src={ registerPoster }/>
                <span>Already have an account?</span>
                <Link to='/'>
                <Button type='text'
                style={{ color: 'white', width: '15em', fontWeight: '900' }}>
                    Click here to Login</Button>
                    </Link>
        </div>
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
<div className="register-form">
    <h2>Register Using Your Credentials</h2>
            <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input />
            </Form.Item>

            <Form.Item<FieldType>
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please input your full name!' }]}
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

            <Form.Item<FieldType>
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please re-enter your password!' }]}
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
                Register
            </Button>
            </Form.Item>
            </div>

</ConfigProvider>

            
        </Form>
    </>
}

export default Register;