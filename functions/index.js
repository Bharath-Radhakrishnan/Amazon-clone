const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I2rHcD10iSGvhP7giLH2kbs7AyOgjycLNQgquZVyukxmPM4jW85dj6iej1tBqwwSTB8L6LEMg8zp2TOpL7NMHU800KlwgkNm3"
);

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
// app.get("/home", (req, res) => res.status(200).send("This is home"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request recieved Boom>>>>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-b2903/us-central1/api
