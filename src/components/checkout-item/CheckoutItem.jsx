import React from 'react';
import styled from 'styled-components';

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
    padding-left: 20px;
  }
  .remove-button {
    /*width: 8%;*/
    padding-left: 12px;
    cursor: pointer;
  }
`;

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <CheckoutItemStyles>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">&#10006;</span>
    </CheckoutItemStyles>
  );
};

export default CheckoutItem;
