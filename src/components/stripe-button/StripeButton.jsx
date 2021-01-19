import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = "pk_test_51IAzTbBorq1TMgN6t39jGz6VDTXEPKawRkU0VzZ7Aorb16cz3rig04eNLTfK1BDDN2mTuVdPgyONnupbdXZYqI1D00c1zLgb4D";

  const onToken = token => {
    console.log(token)
    // connect to backend
    alert('Payment successful')
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
