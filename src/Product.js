import React from "react";
import "./product.css";

function Product({ title, price, rating }) {
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
      <img src="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
