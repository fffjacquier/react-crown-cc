import React from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form/FormInput";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import styled from "styled-components";

const SignUpStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`;

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        displayName: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value })
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpStyles>
        <h2>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="display Name"
            value={displayName}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
          ></FormInput>
          <CustomButton type="submit"> Sign up </CustomButton>
        </form>
      </SignUpStyles>
    );
  }
}

export default SignUp;
