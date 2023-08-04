import React, { useEffect, useState } from "react";
import "./Home.css";
import { Select, Row, Col, Card } from "antd";

import banner from "../../assets/banner.png";
import ProductCard from "../../components/ProductCard";

import {
  useGetProductsQuery,
  useGetProductByCategoryQuery,
} from "../../store/services";

import { CATEGORYOPTOINS } from "../../UIdata/categoryOptions";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const {
    data: productsData,
    isLoading,
    error: errorInProducts,
  } = useGetProductsQuery();

  const { data: categoryData, error: errorInCategory } =
    useGetProductByCategoryQuery(selectedCategory);

  useEffect(() => {
    setSelectedProducts(() => {
      if (!errorInCategory && !errorInProducts)
        return categoryData?.products?.length > 0
          ? categoryData?.products
          : productsData?.products;
      else return [];
    });
  }, [categoryData, productsData]);

  const categoryChangeHandler = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <section className="banner">
        <img src={banner} alt="" />
      </section>

      <section className="container products__container">
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
            options={CATEGORYOPTOINS}
          />
        </Row>
        <Row gutter={[64, 40]} style={{ flexWrap: "wrap" }} justify="center">
          {selectedProducts?.length > 0
            ? selectedProducts?.map((product) => (
                <Col>
                  <ProductCard key={uuidv4()} product={product} />
                </Col>
              ))
            : new Array(20).fill(1).map(() => (
                <Col>
                  <Card
                    key={uuidv4()}
                    style={{
                      width: 350,
                      marginTop: 16,
                    }}
                    loading={isLoading}
                  ></Card>
                </Col>
              ))}
          {errorInCategory || (errorInCategory && <p>{errorInProducts}</p>)}
        </Row>
      </section>
    </>
  );
};

export default Home;
