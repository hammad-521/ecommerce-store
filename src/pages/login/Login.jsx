import React from "react";
import "./Login.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row } from "antd";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login">
      <Form
        name="normal_login"
        className="form"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div>
          <h2>Welcome Back!</h2>
          <p>Please fill out the details below.</p>
        </div>
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            style={{ padding: "10px" }}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ padding: "10px" }}
          />
        </Form.Item>
        <Form.Item>
          <Row justify="space-between">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#" className="forget" style={{ color: "#1ea8a0" }}>
              Forget?
            </a>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
