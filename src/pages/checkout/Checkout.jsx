import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectedCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const CheckoutStyles = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .header {
    display: flex;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
  span {
    font-family: "Open Sans Condensed", sans-serif;
  }
`;

const Checkout = ({ cartItems, cartTotal }) => (
  <CheckoutStyles>
    <div className="header">
      {Array.from(
        ["Product", "Description", "Quantity", "Price", "Remove"],
        (name) => (
          <div className="header-block" key={name}>
            <span>{name}</span>
          </div>
        )
      )}
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: {cartTotal}€</span>
    </div>
  </CheckoutStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectedCartTotal,
});

export default connect(mapStateToProps)(Checkout);
