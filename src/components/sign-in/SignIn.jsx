import React, { Component } from "react";
import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form/FormInput";
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

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

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }

  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInStyles>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>Google Sign in</CustomButton>
          </div>
        </form>
      </SignInStyles>
    );
  }
}

export default SignIn;
