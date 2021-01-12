import React from 'react';
import styled from "styled-components";

const HomepageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const DirectoryMenuStyles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItemStyles = styled.div`
  min-width: 30%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    h1 {
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
    }
    span {
      font-weight: lighter;
      font-size: 16px;
      text-transform: uppercase;
      font-variant: small-caps;
    }
  }
`;

const Homepage = () => {
  return (
    <HomepageStyles>
      <nav>
        <a href="">Logo</a>
        <a href="">Cart</a>
      </nav>
      <DirectoryMenuStyles>
        <MenuItemStyles>
          <div className="content">
            <h1>Hats</h1>
            <span>Shop Now</span>
          </div>
        </MenuItemStyles>
        <MenuItemStyles>
          <div className="content">
            <h1>Jackets</h1>
            <span>Shop Now</span>
          </div>
        </MenuItemStyles>
        <MenuItemStyles>
          <div className="content">
            <h1>Sneakers</h1>
            <span>Shop Now</span>
          </div>
        </MenuItemStyles>
        <MenuItemStyles>
          <div className="content">
            <h1>Women's</h1>
            <span>Shop Now</span>
          </div>
        </MenuItemStyles>
        <MenuItemStyles>
          <div className="content">
            <h1>Men's</h1>
            <span>Shop Now</span>
          </div>
        </MenuItemStyles>
      </DirectoryMenuStyles>
    </HomepageStyles>
  );
};

export default Homepage;
