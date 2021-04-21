import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
    padding: 10px;
    height: 60px;
  }

  .nav-right {
    /*width: 50%;*/
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const LogoContainerStyle = styled(Link)`
  width: 70px;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    /*width: 80%;*/
  }
`;
const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderStyles>
      <LogoContainerStyle to="/">
        <Logo />
      </LogoContainerStyle>
      <div className="nav-right">
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/shop">contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>sign out</OptionLink>
        ) : (
          <OptionLink to="/signin">sign in</OptionLink>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </HeaderStyles>
  );
};

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
