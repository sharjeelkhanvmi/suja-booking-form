// utils/stripe.js
import Stripe from "stripe";

const stripe = new Stripe("sk_test_C0q6hxTCyBAgHLrqF1eY9tR9", {
  apiVersion: "2020-08-27" // Replace with your desired API version
});
export default stripe;
