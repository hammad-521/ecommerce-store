import React, { useState } from "react";
import "./Header.css";
import { Avatar, Badge, Row, Col, Dropdown, Drawer, Empty, Button } from "antd";
import { BsCartDash } from "react-icons/bs";

import { AiOutlineUser } from "react-icons/ai";
import { CiLogout, CiSettings } from "react-icons/ci";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

import logo from "../assets/logo3.png";

import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Header = () => {
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const showDrawer = () => {
    setCartIsOpen(true);
  };
  const onClose = () => {
    setCartIsOpen(false);
  };

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
    <>
      <header>
        <Row justify="space-between" align="middle" className="container">
          <Link to="/products">
            <img className="logo" src={logo} alt="Company Logo" />
          </Link>
          {isLoggedIn && (
            <Row gutter={40} align="middle">
              <Col>
                <button onClick={showDrawer} className="cart">
                  <Badge
                    count={cart.length}
                    style={{ backgroundColor: "#ef6e25" }}
                  >
                    <BsCartDash fontSize="25px" />
                  </Badge>
                </button>
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
      <div>
        <Drawer
          title="Your Cart"
          placement="right"
          onClose={onClose}
          open={cartIsOpen}
          footer={<CartFooter />}
        >
          <Row gutter={[0, 16]} justify="center">
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={uuidv4()} cartItem={item} />)
            ) : (
              <Empty
                description={
                  <div className="cart__feedback">
                    <p>Your Cart is Empty :(</p>
                  </div>
                }
              ></Empty>
            )}
          </Row>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
