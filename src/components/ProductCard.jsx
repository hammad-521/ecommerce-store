import React from "react";
import "./ProductCard.css";
import { Avatar, Card } from "antd";
import { BsCartPlus } from "react-icons/bs";

import thumbnail from "../assets/thumbnail.jpeg";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card__banner">
        <img src={thumbnail} alt="" />
      </div>
      <div className="card__content">
        <div className="card__desc">
          <h2> Iphone X</h2>
          <p>
            $1100 <sup>$86</sup>
          </p>
        </div>
        <div className="card__cart">
          <BsCartPlus />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
