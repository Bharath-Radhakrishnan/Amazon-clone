import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function Subtotal() {
  const [{ basket }] = useStateValue();
  const itemCount = basket?.length;
  let totalPrice = 0;
  basket.forEach((element) => {
    totalPrice += element.price;
  });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({value} item):<strong>{totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={itemCount}
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
