import React from 'react';
import styled from 'styled-components';

const CustomButtonStyles = styled.button`
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  padding: 0 35px;
  line-height: 50px;
  letter-spacing: 0.5px;
  width: auto;
  min-width: 165px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &.google-sign-in {
    background-color: #4285f4;
    color: white;
    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`;

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <CustomButtonStyles
      className={`${isGoogleSignin ? 'google-sign-in': ''}`}
      {...otherProps}>
      {children}
    </CustomButtonStyles>
  );
};

export default CustomButton;
