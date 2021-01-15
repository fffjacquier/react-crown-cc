import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

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
  div:last-child {
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

const Header = ({ currentUser }) => {
  return (
    <HeaderStyles>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
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
      </div>
    </HeaderStyles>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
