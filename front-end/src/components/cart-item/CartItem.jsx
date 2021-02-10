import React from 'react';
import styled from 'styled-components';

const CartItemStyles = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
  .details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    .name {
      font-size: 16px;
    }
  }
`;

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => {
  return (
    <CartItemStyles>
      <img src={imageUrl} alt={name} />
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x {price}€</span>
      </div>
    </CartItemStyles>
  );
};

export default React.memo(CartItem);
