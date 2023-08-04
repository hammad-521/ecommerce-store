import React from "react";
import "./ProductQuantityAction.css";
import { Col, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ProductQuantityAction = ({ quantity, onIncrement, onDcrement }) => {
  return (
    <Col className="product__detail--quantity">
      <Button type="outline" icon={<PlusOutlined />} onClick={onIncrement} />
      <input type="number" placeholder="0" value={quantity} />
      <Button type="outline" icon={<MinusOutlined />} onClick={onDcrement} />
    </Col>
  );
};

export default ProductQuantityAction;
