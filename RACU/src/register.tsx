import { Link } from "react-router-dom";
import registerPoster from '../src/assets/images/a-14.png'
import { Button, Form, Input, ConfigProvider, Radio } from 'antd';
import profile1 from "../src/assets/images/18.png"
import profile2 from "../src/assets/images/19.png"
import profile3 from "../src/assets/images/20.png"
import profile4 from "../src/assets/images/21.png"
import profile6 from "../src/assets/images/23.png"


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
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

        <div className="login-poster">
            <img className="poster" src={ registerPoster }/>
                <span className="reg-text">Already have an account?</span>
                <Link to='/'>
                <Button type='text'
                style={{ color: '#660000', width: '13em', fontWeight: '900', fontFamily:'Mountains of Christmas', fontSize:'20px' }}>
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
    <h2 style={{
      color:'#660000'
    }}>Register Using Your Credentials</h2>
            <div className="register-form-container">
              <Form.Item<FieldType>
              // label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              >
              <Input
              placeholder="Username" />
              </Form.Item>

              <Form.Item<FieldType>
              // label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
              >
              <Input 
              placeholder="Full Name"/>
              </Form.Item>

              <Form.Item<FieldType>
              // label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              >
              <Input.Password
              placeholder="Password" />
              </Form.Item>

              <Form.Item<FieldType>
              // label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true, message: 'Please re-enter your password!' }]}
              >
              <Input.Password 
              placeholder="Confirm Password"/>
              </Form.Item>
            </div>


            <ConfigProvider
              theme={{
                components: {
                  Radio: {
                    buttonBg:'#ECE2D0',
                    buttonSolidCheckedActiveBg: '#660000',
                    buttonSolidCheckedBg: '#660000',
                    buttonSolidCheckedHoverBg: '#660000',
                    buttonCheckedBg: '#660000',
                    colorPrimaryActive: '#ECE2D0',
                    colorPrimary: '#ECE2D0',
                    colorPrimaryHover:'#0C0C0C',
                    colorBorder: '#660000'
                  },
                },
              }}
            >
              <label className="select-prof-label" htmlFor="profile">Select Profile Picture</label>
                        <Radio.Group defaultValue="a" buttonStyle="solid" name="profile">
                          <Radio.Button className="profile-radio" value="b"><img className="radio-prof" src={ profile1 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="c"><img className="radio-prof" src={ profile2 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="d"><img className="radio-prof" src={ profile3 }/></Radio.Button>
                          <Radio.Button className="profile-radio" value="e"><img className="radio-prof" src={ profile4 }/></Radio.Button>
                          {/* <Radio.Button className="profile-radio" value="f"><img className="radio-prof" src={ profile5 }/></Radio.Button> */}
                          <Radio.Button className="profile-radio" value="g"><img className="radio-prof" src={ profile6 }/></Radio.Button>
                        </Radio.Group>
            </ConfigProvider>
            

            {/* <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Button htmlType="submit"
            style={{
              width:'15em',
              borderRadius:'20px',
              marginTop:'20px',
              fontFamily:'Mountains of Christmas',
              fontWeight:'700', fontSize:'20px',
              backgroundColor:'#660000',
              color: '#ECE2D0'
            }}>
                Register
            </Button>
            </div>

</ConfigProvider>

            
        </Form>
    </>
}

export default Register;