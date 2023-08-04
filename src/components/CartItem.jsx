import React, { useState } from "react";
import "./CartItem.css";
import { Row, Col, Button } from "antd";
import ProductQuantityAction from "./ProductQuantityAction";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col className="cart__img">
        <img src={cartItem.img} alt="" />
      </Col>
      <Col className="cart__info">
        <h2>{cartItem.title.substr(0, 8)}...</h2>
        <p>
          {cartItem.price} <sub>x{cartItem.quantity}</sub>
        </p>
        <ProductQuantityAction
          quantity={cartItem.quantity}
          onIncrement={() => dispatch(addToCart({ newItem: cartItem }))}
          onDcrement={() => dispatch(removeFromCart(cartItem.id))}
        />
      </Col>
    </Row>
  );
};
export default CartItem;
