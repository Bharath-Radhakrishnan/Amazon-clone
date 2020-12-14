import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <h2>The Subtotal will go here duh...</h2>
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
        value={1000000.454554}
        decimalScale={2}
        prefix="$"
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
}

export default Subtotal;
