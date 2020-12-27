import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from "./firebase";
import "./payment.css";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("The Secret is >>>>>", clientSecret);
  const handleSubmit = async (e) => {
    //strip stuff
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({ type: "EMPTY_BASKET" });
        history.replace("/orders");
      });
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
            <div className="payment__pricecontainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order total:{value}</h3>
                  </>
                )}
                value={getBasketTotal(basket)}
                decimalScale={2}
                prefix="$"
                displayType={"text"}
                thousandSeparator={true}
              />
              <button
                disabled={processing || disabled || succeeded}
                type="submit"
              >
                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
