import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;

  .logo:first-child {
    width: 70px;
    height: 100%;
  }
  .nav-right {
    /*width: 50%;*/
    height: 100%;
    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
    .option:last-child {
      padding-right: 0;
    }
    display: flex;
    justify-content: flex-end;
  }
`;

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderStyles>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/shop" className="option">shop</Link>
        <Link to="/shop" className="option">contact</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>
              sign out
            </div>
            :
            <Link to="/signin" className="option">sign in</Link>
        }
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </HeaderStyles>
  );
};

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
