import React from "react";

import "./CartFooter.css";
import { Button } from "antd";
import { useSelector } from "react-redux";

import { Row, Col } from "antd";
const CartFooter = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="cart__footer">
      <p>SubTotal : ${cart.totalPrice}</p>
      <Button type="link">Checkout now</Button>
    </div>
  );
};

export default CartFooter;
