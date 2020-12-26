import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const itemCount = basket?.length;

  const generateProducts = () => {
    return basket.map((element) => {
      return (
        <CheckoutProduct
          id={element.id}
          title={element.title}
          image={element.image}
          price={element.price}
          rating={element.rating}
        />
      );
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/S/aplus-media/sc/639bbef0-9746-4f6e-871d-e83914870f24.__CR1,0,2021,625_PT0_SX970_V1___.jpg"
        />
        <div>
          <h3>Hello {user?.email || "Guest"},</h3>
          <h2 className="checkout__title">
            Your Shopping Basket contains {itemCount} items
          </h2>
          {generateProducts()}
        </div>
      </div>
      <div className="chekout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
