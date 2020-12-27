import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }] = useStateValue([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot.docs);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Orders</h1>
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </div>
  );
}

export default Orders;
