import { Link } from "react-router-dom";
import registerPoster from '../src/assets/images/a-14.png'
import { Button, Form, Input, ConfigProvider, Radio, message } from 'antd';
import profile1 from "../src/assets/images/18.png"
import profile2 from "../src/assets/images/19.png"
import profile3 from "../src/assets/images/20.png"
import profile4 from "../src/assets/images/21.png"
import profile6 from "../src/assets/images/23.png"
import './register.css'
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {

  const onFinish = (values: any) => {
    axios.post('https://localhost:7070/api/User', values)
        .then(response => { 
          console.log(response)
          message.success('Successfull registered! Please proceed to the login page.');
        })
        .catch(error => {
          console.error(error.error)
          message.error('Registration failed. Please try again later.');
        });
  }
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  type FieldType = {
    name?: string;
    userName?: string;
    password?: string;
    avatar?: number;
  }

 
    return <>
        <Form name="basic"
            labelCol={{ span: 9 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
          <div className="login-poster">
            <img className="poster" src={ registerPoster }/>
            <span className="reg-text">Already have an account?</span>
            <Link to='/'>
              <Button type='text' style={{ color: '#660000', width: '13em', fontWeight: '900', fontFamily:'Mountains of Christmas', fontSize:'20px', height:'fit-content' }}>
                Click here to Login
              </Button>
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
            }}>
            <div className="register-form">
              <h2 style={{ color:'#660000' }}>
                Register Using Your Credentials
              </h2>
              <div className="register-form-container">
                {/* USERNAME INPUT */}
                <Form.Item<FieldType> name="userName"
                  rules={[{ required: true, message: 'Please input your username!' }]}>
                  <Input placeholder="Username" id="userName"/>
                </Form.Item>
                {/* FULL NAME INPUT */}
                <Form.Item<FieldType> name="name"
                  rules={[{ required: true, message: 'Please input your full name!' }]}>
                  <Input placeholder="Full Name" id="name"/>
                </Form.Item>
                {/* PASSWORD INPUT */}
                <Form.Item<FieldType> name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password placeholder="Password" id="password"/>
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
                }}>
                  {/* USER AVATAR */}
                <label className="select-prof-label" htmlFor="profile">Select Profile Picture</label>
                <Form.Item<FieldType>
                  name="avatar">
                  <Radio.Group defaultValue={1} buttonStyle="solid" name="profile">
                    <Radio.Button className="profile-radio" value={1}><img className="radio-prof" src={ profile1 }/></Radio.Button>
                    <Radio.Button className="profile-radio" value={2}><img className="radio-prof" src={ profile2 }/></Radio.Button>
                    <Radio.Button className="profile-radio" value={3}><img className="radio-prof" src={ profile3 }/></Radio.Button>
                    <Radio.Button className="profile-radio" value={4}><img className="radio-prof" src={ profile4 }/></Radio.Button>
                    {/* <Radio.Button className="profile-radio" value="f"><img className="radio-prof" src={ profile5 }/></Radio.Button> */}
                    <Radio.Button className="profile-radio" value={5}><img className="radio-prof" src={ profile6 }/></Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </ConfigProvider>
              {/* REGISTER BUTTON */}
              <Button htmlType="submit" 
                style={{
                  width:'15em',
                  borderRadius:'20px',
                  fontFamily:'Mountains of Christmas',
                  fontWeight:'700',
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