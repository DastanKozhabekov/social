import React from "react";
import {Button, Block} from '../../components'
import { Form, Input } from 'antd'
import './auth.scss'

const Auth = () =>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Log In</h2>
                    <p> Enter in your account</p>
                </div>
                <Block>
                    <Form
                        name="basic" labelCol={{ span: 8, }}
                        wrapperCol={{ span: 16, }}
                        initialValues={{ remember: true, }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                        <Form.Item
                            label="Username" name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}>
                            <Button type="primary" htmlType="submit" size='large'>
                                Submit
                            </Button>
                        </Form.Item>
                        <a className="auth__register-link" href="#">Register</a>
                    </Form>
                </Block>
            </div>
        </div>
    );
}

export default Auth