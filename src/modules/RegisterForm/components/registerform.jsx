import React from "react";
import {Link} from "react-router-dom";
import {Button, Block} from '../../../components'
import { Form, Input } from 'antd'

class RegisterForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {}
    }

    render(){
        return (
            <>
                <div className="auth__top">
                    <h2>Registration</h2>
                    <p>Create account</p>
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
                            label="Name" name="name">
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password">
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Repeat password"
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
                        <Link className="auth__register-link" to="/login">
                            Allready have account?
                        </Link>
                    </Form>
                </Block>
            </>
        )
    }
}

export default RegisterForm;