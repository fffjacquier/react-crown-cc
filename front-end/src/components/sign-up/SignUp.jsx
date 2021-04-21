import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form/FormInput";

import { signUpStart } from "../../redux/user/user.actions";

const SignUpStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;

const SignUp = ({ signUpStart }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  })

  const { displayName, email, password, confirmPassword } = user;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ email, displayName, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <SignUpStyles>
      <h2>I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="display Name"
          value={displayName}
          handleChange={handleChange}
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
        ></FormInput>
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
        ></FormInput>
        <CustomButton type="submit"> Sign up </CustomButton>
      </form>
    </SignUpStyles>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
