import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 60px;
  z-index: 5;

  .items {
    display: flex;
    flex-direction: column;
    height: 240px;
    overflow: auto;
    &.none {
      overflow: none;
    }
  }
  .no-items {
    font-size: 18px;
    margin: 50px auto;
  }
  button {
    margin-top: auto;
  }
`;

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartStyles>
    <div className={`items ${!cartItems.length ? "none" : ""}`}>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="no-items">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden());
    }}>
      Checkout
    </CustomButton>
  </CartStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
