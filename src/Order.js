import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./order.css";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order__id ">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
            hideButton={true}
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order total:{value}</h3>
          </>
        )}
        value={order.data.amount / 100}
        decimalScale={2}
        prefix="$"
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
}

export default Order;
