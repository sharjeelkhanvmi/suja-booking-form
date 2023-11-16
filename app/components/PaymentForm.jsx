import React, { useState } from 'react';
import { CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    Elements,
    ElementsConsumer, useStripe, useElements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OCgAiLtI6eAAvg7XJGkaG35swVZUZF8RfzmeizRJ2WaE9SvASJaUUMD0POWNC34gIcWLwmGLuH7yltlphocFIIE00DATZf8Tf');

const appearance = {
    theme: 'stripe',
    variables: {
        colorPrimary: '#0570de',
        colorBackground: '#ffffff',
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '2px',
        borderRadius: '4px',
        // See all possible variables below
      }
  };
  // sk_test_51OCgAiLtI6eAAvg7RIlCZHIzlh3tzYm9Eb6a0ZZEp1PSraq6yZz7GPKo9n9DmKxGTMTroGpU62CN8SZ2Vm7yGOV400kDMncejP

const PaymentForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51OCgAiLtI6eAAvg7RIlCZHIzlh3tzYm9Eb6a0ZZEp1PSraq6yZz7GPKo9n9DmKxGTMTroGpU62CN8SZ2Vm7yGOV400kDMncejP}}',
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      // Handle the payment method (send to server for processing, etc.)
      console.log('PaymentMethod:', paymentMethod);
    } catch (error) {
      setPaymentError(error.message);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
    </form>
  );
};

export default PaymentForm;
