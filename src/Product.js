import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>La La La La</p>
        <p className="product__price">
          <small>$$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
