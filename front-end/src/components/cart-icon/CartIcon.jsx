import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
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
`;
const DotStyles = styled.span`
  position: absolute;
  font-size: 10px;
  bottom: 7px;
  font-weight: bold;
  pointer-events: none;
  padding: 0.15rem;
  width: 15px;
  text-align: center;
  /*font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;*/
`;
const AnimationStyles = styled.span`
  position: relative;
  top: 11px;
  left: -20px;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  /* Initial state */
  .count-enter {
    transform: rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: rotateX(0.5turn);
  }
`;


const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconStyles onClick={toggleCartHidden}>
      <ShoppingIcon className="cart-icon" />
      <AnimationStyles>
        <TransitionGroup>
          <CSSTransition
            unmountOnExit
            className="count"
            classNames="count"
            key={itemCount}
            timeout={{ enter: 400, exit: 400 }}
          >
            <DotStyles>{itemCount}</DotStyles>
          </CSSTransition>
        </TransitionGroup>
      </AnimationStyles>
    </CartIconStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
