import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

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

const CartDropdown = () => <CartStyles>
  <div></div>
  <CustomButton type="submit"> Checkout </CustomButton>
</CartStyles>;

export default CartDropdown;
