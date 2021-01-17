import React from 'react';
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const MenuItemStyles = styled.div`
  min-width: 30%;
  height: 240px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-size: cover;
  background-position: center;

  &.large {
    height: 380px;
  }

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


const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => (
  <MenuItemStyles
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size}`}
    onClick={() => history.push(`${linkUrl}`)}
  >
    <div className="content">
      <h1>{title}</h1>
      <span>SHOP NOW</span>
    </div>
  </MenuItemStyles>
);

export default withRouter(MenuItem);
