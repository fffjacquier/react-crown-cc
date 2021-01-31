import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form/FormInput";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

const SignInStyles = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInStyles>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignin
          >
            Google Sign in
          </CustomButton>
        </div>
      </form>
    </SignInStyles>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
