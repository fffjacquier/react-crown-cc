import styled from "styled-components";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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
    overflow: scroll;
  }
  button {
    margin-top: auto;
  }
`;

const CartDropdown = ({ cartItems }) => <CartStyles>
  <div className="items">
    {cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}
  </div>
  <CustomButton type="submit"> Checkout </CustomButton>
</CartStyles>;

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
