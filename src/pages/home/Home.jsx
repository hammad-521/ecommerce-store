import React from "react";
import "./Home.css";
import { Select, Row, Col } from "antd";

import banner from "../../assets/banner.png";
import ProductCard from "../../components/ProductCard";

const PRODUCTS = new Array(20).fill(1);

console.log(PRODUCTS);

const Home = () => {
  const categoryChangeHandler = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <section className="banner">
        <img src={banner} alt="" />
      </section>

      <section className="container">
        <Row
          justify="space-between"
          className="products__header"
          align="middle"
        >
          <h2>Our Products</h2>
          <Select
            showSearch
            placeholder="Select a category"
            optionFilterProp="children"
            onChange={categoryChangeHandler}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            className="category"
            options={[
              {
                value: "smarphone",
                label: "Smart Phone",
              },
              {
                value: "cosmetics",
                label: "Cosmetics",
              },
              {
                value: "interior",
                label: "Interior",
              },
            ]}
          />
        </Row>
      </section>

      <section className="container products__container">
        <Row gutter={[64, 40]} style={{ flexWrap: "wrap" }} justify="center">
          {PRODUCTS.map((item) => (
            <Col>
              <ProductCard />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Home;
