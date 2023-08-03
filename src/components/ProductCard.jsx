import React from "react";
import "./ProductCard.css";
import { Avatar, Card } from "antd";
import { BsCartPlus } from "react-icons/bs";
import { calculateDiscountedPrice } from "../helper/calculations";

import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/product-detail/${product.id}`}>
        <div className="card__banner">
          <img src={product.thumbnail} alt="product thumbnail image" />
        </div>
      </Link>

      <div className="card__content">
        <div className="card__desc">
          <h2>{product.title.substr(0, 23)}</h2>
          <p>
            $
            {calculateDiscountedPrice(
              product.price,
              product.discountPercentage
            )}
            <sup>${product.price}</sup>
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
