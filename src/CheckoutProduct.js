import React from "react";
import "./checkout.css";
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
        <h3>{title}</h3>
        <p>${price}</p>
        <button onClick={removeItem}>Remove Item</button>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((value, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
