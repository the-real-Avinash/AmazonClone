import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        src="./images/shoes.jpg"
        alt="shoes"
        className="checkoutProduct__image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Campus Men's Mike (N) Running Shoes No Cost EMI: Avail No Cost EMI on
          select cards for orders
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐⭐ </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
