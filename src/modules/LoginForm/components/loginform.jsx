import React from "react";
import {Link} from "react-router-dom";
import {Button, Block} from '../../../components'
import { Form, Input } from 'antd'

class LoginForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {}
    }

    render(){
        return (
            <>
                <div className="auth__top">
                    <h2>Log In</h2>
                    <p> Enter in your account</p>
                </div>
                <Block>
                    <Form
                        name="basic" labelCol={{ span: 8, }}
                        wrapperCol={{ span: 16, }}
                        initialValues={{ remember: true, }}
                        autoComplete="off">
                        <Form.Item
                            label="Username" name="username">
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password">
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
                        <Link className="auth__register-link" to="/register">
                            Register
                        </Link>
                    </Form>
                </Block>
            </>
        )
    }
}

export default LoginForm;