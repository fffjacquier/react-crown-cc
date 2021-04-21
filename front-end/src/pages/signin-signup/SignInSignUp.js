import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignStyles = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

const SignInSignUpPage = () => {
  return (
    <SignStyles>
      <SignIn />
      <SignUp />
    </SignStyles>
  );
};

export default SignInSignUpPage;
