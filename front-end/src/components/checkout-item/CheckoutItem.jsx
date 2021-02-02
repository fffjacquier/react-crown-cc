import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { removeCartItem, addCartItem, removeItem } from "../../redux/cart/cart.actions";

const CheckoutItemStyles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  border-bottom: 1px solid darkgrey;

  .image-container {
    width: 23%;
    padding-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }
  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }
  .remove-button {
    /*width: 8%;*/
    padding-left: 12px;
    cursor: pointer;
  }
`;

const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemStyles>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button"
        onClick={() => clearItem(cartItem)}
      >&#10006;</span>
    </CheckoutItemStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(removeCartItem(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
