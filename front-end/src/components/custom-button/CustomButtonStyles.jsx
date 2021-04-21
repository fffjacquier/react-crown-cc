import styled, { css } from "styled-components";

const InvertedCss = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSigninCss = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const ButtonCss = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignin) {
    return GoogleSigninCss;
  }

  return props.inverted ? InvertedCss : ButtonCss;
}

export const CustomButtonContainerStyles = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  padding: 0 35px;
  line-height: 50px;
  letter-spacing: 0.5px;
  min-width: 165px;
  width: auto;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
