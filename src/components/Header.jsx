import React from "react";
import "./Header.css";
import { Avatar, Badge, Row, Col } from "antd";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

// import logo from "../assets/logo.png";
import logo from "../assets/logo3.png";

const Header = () => {
  return (
    <header>
      <Row justify="space-between" align="middle" className="container">
        <a href="/">
          <img className="logo" src={logo} alt="Company Logo" />
        </a>
        <Row gutter={40} align="middle">
          <Col>
            <a href="#">
              <Badge count={1}>
                <BsCartDash fontSize="25px" />
              </Badge>
            </a>
          </Col>
          <Col>
            <button className="profile">
              <Avatar
                style={{ backgroundColor: "#1ea8a0" }}
                icon={<AiOutlineUser />}
                size=""
              />
            </button>
          </Col>
        </Row>
      </Row>
    </header>
  );
};

export default Header;
