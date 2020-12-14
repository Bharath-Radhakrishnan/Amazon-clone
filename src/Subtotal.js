import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 item):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={0}
        decimalScale={2}
        prefix="$"
        displayType={"text"}
        thousandSeparator={true}
      />
      <button> Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
