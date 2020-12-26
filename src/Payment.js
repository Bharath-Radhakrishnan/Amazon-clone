import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container"></div>
      {/* Delivery Address */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivey Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
        </div>
      </div>

      {/* Review Items */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review Items and Delivery</h3>
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
      </div>

      {/* Payment Method */}
      <div className="payment__section">
        <div className="payment__title"></div>
      </div>
    </div>
  );
}

export default Payment;
