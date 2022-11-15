import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
const Checkout = () => {
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="./images/offerbanner.jpg"
            alt="offerbanner"
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <CheckoutProduct />
            <CheckoutProduct />
            <CheckoutProduct />
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
