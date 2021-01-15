import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIconStyles = styled.div`
  width: 45px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .cart-icon {
    width: 24px;
    height: 24px;
  }

  span {
    position: absolute;
    font-size: 10px;
    bottom: 10px;
    font-weight: bold;
    pointer-events: none;
  }
`;

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <CartIconStyles>
      <ShoppingIcon className="cart-icon" onClick={toggleCartHidden} />
      <span>0</span>
    </CartIconStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
