import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <small>{order.id}</small>
      {order.data.basket?.map((item) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Order;
