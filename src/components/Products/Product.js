import React from "react";
import "./Product.css";

const Product = ({ id, title, rating, price, image }) => {
  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="shoes" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
