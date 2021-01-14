import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "black",
    grey: "grey",
  },
};
const mixinShrinkLabel = () =>
  `top: -14px;
  color: black;
  font-size: 12px;
  `;

const FormInputStyles = styled.div`
  position: relative;
  margin: 45px 0;

  input {
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px;
    margin: 25px 0;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.color.grey};

    &:focus {
      outline: none;
    }
    &:focus ~ label {
      ${mixinShrinkLabel}
    }
    &[type="password"] {
      letter-spacing: 0.3em;
    }
  }
  label {
    color: grey;
    font-size: 16px;
    position: absolute;
    left: 5px;
    top: 10px;
    transition: 300mx ease all;
    &.shrink {
      ${mixinShrinkLabel}
    }
  }
`;

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <ThemeProvider theme={theme}>
    <FormInputStyles>
      <input onChange={handleChange} {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      )}
    </FormInputStyles>
  </ThemeProvider>
);
export default FormInput;
