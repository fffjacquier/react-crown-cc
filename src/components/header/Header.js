import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;

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
`;

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderStyles>
      <LogoContainerStyle to="/">
        <Logo />
      </LogoContainerStyle>
      <div className="nav-right">
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/shop">contact</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>sign out</OptionLink>
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

export default connect(mapStateToProps)(Header);
