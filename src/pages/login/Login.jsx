import React, { useEffect } from "react";
import "./Login.css";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
const { Text } = Typography;

import { useDispatch, useSelector } from "react-redux";
import { login, logout, setRememberCredentials } from "../../store/authSlice";
import { useNavigate } from "react-router";

import { fetchRememberData } from "../../store/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, password, error } = useSelector((state) => state.userAuth);

  useEffect(() => {
    if (username) {
      navigate("/products");
    }
  }, [username]);

  useEffect(() => {
    dispatch(fetchRememberData());
  }, []);

  const onFinish = (values) => {
    dispatch(login(values));
  };

  return (
    <div className="login">
      <Form
        name="normal_login"
        className="form"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ username, password }}
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
        <Text type="danger" style={{ fontSize: "15px", fontWeight: "medium" }}>
          {error}
        </Text>
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
