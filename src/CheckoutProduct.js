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
    <div className="producttile">
      <img src={image}></img>
      <div className="producttile__info">
        <h3>{title}</h3>
        <p>${price}</p>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
