import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    console.log("removed");
    dispatch({
      action: "REMOVE_FROM_BASKET",
      item: { id: id },
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image}></img>
      <div className="checkoutproduct__info">
        <h3 className="checkoutproduct_title">{title}</h3>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((value, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
