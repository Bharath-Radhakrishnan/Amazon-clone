import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./payment.css";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //strip stuff
  };
  const handleChange = (e) => {
    //strip stuff
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
      </div>
      {/* Delivery Address */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivey Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>House Name</p>
          <p>Street</p>
        </div>
      </div>

      {/* Review Items */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review Items and Delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          {/* Stripe Goes Here */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
