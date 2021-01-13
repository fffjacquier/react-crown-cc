import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
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
    width: 50%;
    height: 100%;
    .option {
      padding: 15px;
    }
    .option:last-child {
      padding-right: 0;
    }
    display: flex;
    justify-content: flex-end;
  }
`;

const Header = () => {
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
      </div>
    </HeaderStyles>
  );
};

export default Header;
