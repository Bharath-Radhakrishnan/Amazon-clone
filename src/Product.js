import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the baskt>>>>", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((value, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
