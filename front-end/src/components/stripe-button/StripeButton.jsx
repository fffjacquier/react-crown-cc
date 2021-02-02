import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = "pk_test_51IAzTbBorq1TMgN6t39jGz6VDTXEPKawRkU0VzZ7Aorb16cz3rig04eNLTfK1BDDN2mTuVdPgyONnupbdXZYqI1D00c1zLgb4D";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful');
    }).catch(error => {
      console.error('payment error:', error);
      alert('There was an issue with your payment. Please make sure you provided the right informations.')
    });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Crown CC"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      currency="EUR"
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
