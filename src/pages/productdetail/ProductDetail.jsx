import React, { useState } from "react";
import "./ProductDetail.css";

import { Carousel, Row, Col, Rate, Button } from "antd";
import { useGetProductDetailQuery } from "../../store/services";
import { calculateDiscountedPrice } from "../../helper/calculations";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import DetailsSekelon from "../../components/DetailsSekelon";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import ProductQuantityAction from "../../components/ProductQuantityAction";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: productData, isLoading } = useGetProductDetailQuery(id);
  const [quantity, setQuantity] = useState(1);

  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const incrementQuantityHandler = () => {
    setQuantity((prevQuantiy) => prevQuantiy + 1);
  };

  const decrementQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prevQuantiy) => prevQuantiy - 1);
    }
  };

  return (
    <section className="container detail__container">
      {!isLoading ? (
        <Row justify="center" gutter={[40, 40]} align="middle">
          <Col span={9}>
            <Carousel dotPosition="left" autoplay dots={{ className: "dots" }}>
              {productData?.images.length > 1 &&
                productData?.images.map((img) => (
                  <div className="product__gallery">
                    <img src={img} />
                  </div>
                ))}
            </Carousel>
          </Col>
          <Col span={9} className="product__detail">
            <h1>{productData?.title}</h1>
            <Rate disabled defaultValue={Math.trunc(productData?.rating)} />
            <p className="product__detail--desc">{productData?.description}</p>
            <p className="product__detail--price">
              $
              {calculateDiscountedPrice(
                productData?.price,
                productData?.discountPercentage
              )}
              <sup> ${productData?.price}</sup>
            </p>
            <Row className="product__detail--action" align="middle">
              <ProductQuantityAction
                quantity={quantity}
                onIncrement={incrementQuantityHandler}
                onDcrement={decrementQuantityHandler}
              />
              <Col className="product__detail--addbtn">
                <Button
                  onClick={() => {
                    {
                      dispatch(addToCart({ newItem: productData, quantity }));
                      setQuantity(1);
                    }
                  }}
                  type="primary"
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <DetailsSekelon />
      )}
    </section>
  );
};

export default ProductDetail;
