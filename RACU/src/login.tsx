import { Button, Form, Input, ConfigProvider } from 'antd';
import { Link } from "react-router-dom";
import logo from './assets/images/a-14.png'
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
    {/* <h2>Welcome back to the festive fun!</h2> */}
    <h2>Log in and let the Christmas wishes begin!</h2>
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
              <Button htmlType="submit"
              style={{ marginTop:'20px', width:'15em', borderRadius:'20px', backgroundColor:'#ECE2D0', color:'#660000', fontFamily:'Mountains of Christmas',
              fontWeight:'700', fontSize:'20px' }}>
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
              style={{ color: '#660000', width: '13em', fontWeight: '900', fontFamily:'Mountains of Christmas', fontSize:'20px'}}>
                  Click here to Register</Button>
                </Link>
            </div>

            
        </Form>
      );
};

export default Login;