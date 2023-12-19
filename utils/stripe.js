// utils/stripe.js
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51OCgAiLtI6eAAvg7RIlCZHIzlh3tzYm9Eb6a0ZZEp1PSraq6yZz7GPKo9n9DmKxGTMTroGpU62CN8SZ2Vm7yGOV400kDMncejP', {
  apiVersion: '2020-08-27', // Replace with your desired API version
});
export default stripe;