const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51K6WIuCZ76mzgSrEb29y2DbcOgpn" +
    "lNLO6Rv6e6cWVybDkplygbfqdXYgKYbpaMxwbXVHm16CEJOiXCsJaDODd1oB00151r5RIr");

// API

// App deploy
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API roots
app.get("/", (request, response) => response.status(200).send("res send"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("payment req receive", total);
    console.log(response);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

//
// http://localhost:5001/amzn-1-294eb/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
