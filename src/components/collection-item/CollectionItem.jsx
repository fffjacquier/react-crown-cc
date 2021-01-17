import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton";

const CollectionItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 350px;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .custom-button {
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      opacity: 0.8;
      display: flex;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
`;

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyles>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addCartItem(item)}
      >
        Add to cart
      </CustomButton>
    </CollectionItemStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
