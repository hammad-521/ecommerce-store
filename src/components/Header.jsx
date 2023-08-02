import React from "react";
import "./Header.css";
import { Avatar, Badge, Row, Col, Dropdown } from "antd";
import { BsCartDash } from "react-icons/bs";

import { AiOutlineUser } from "react-icons/ai";
import { CiLogout, CiSettings } from "react-icons/ci";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

import logo from "../assets/logo3.png";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const dispatch = useDispatch();
  const items = [
    {
      key: "1",
      label: <button onClick={() => dispatch(logout())}>Logout</button>,
      icon: <CiLogout />,
    },
    {
      key: "2",
      label: (
        <button onClick={() => alert("Will work on future")}>
          Change Password
        </button>
      ),
      icon: <CiSettings />,
    },
  ];
  return (
    <header>
      <Row justify="space-between" align="middle" className="container">
        <a href="/">
          <img className="logo" src={logo} alt="Company Logo" />
        </a>
        {isLoggedIn && (
          <Row gutter={40} align="middle">
            <Col>
              <a href="#">
                <Badge count={1}>
                  <BsCartDash fontSize="25px" />
                </Badge>
              </a>
            </Col>
            <Col>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className="profile"
              >
                <Avatar
                  style={{ backgroundColor: "#1ea8a0" }}
                  icon={<AiOutlineUser />}
                  size=""
                />
              </Dropdown>
            </Col>
            <Col></Col>
          </Row>
        )}
      </Row>
    </header>
  );
};

export default Header;
