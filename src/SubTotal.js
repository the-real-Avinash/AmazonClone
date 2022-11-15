import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";

const SubTotal = () => {
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal(0 Items): <strong>$0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      ></CurrencyFormat>
      <button>Proceed To checkout</button>
    </div>
  );
};

export default SubTotal;
