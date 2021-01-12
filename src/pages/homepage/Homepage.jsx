import React from 'react';
import styled from "styled-components";
import Directory from '../../components/directory/Directory';

const HomepageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Homepage = () => {
  return (
    <HomepageStyles>
      <nav>
        <a href="/">Logo</a>
        <a href="/cart">Cart</a>
      </nav>
      <Directory />
    </HomepageStyles>
  );
};

export default Homepage;
