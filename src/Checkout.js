import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/S/aplus-media/sc/639bbef0-9746-4f6e-871d-e83914870f24.__CR1,0,2021,625_PT0_SX970_V1___.jpg"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="chekout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
