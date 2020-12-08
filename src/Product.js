import React from "react";
import "./product.css";

function Product({ title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>⭐{rating}</p>
        </div>
      </div>
      <img src={image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
