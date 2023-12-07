import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/themes';
import { useNavigate } from 'react-router-dom';
import { apiLink } from '../data';

const LoginFormContainer = styled.div`
  width: 22rem;
  margin: 0 auto;
  padding: 32px 32px 0 32px;
  border-radius: 8px;
  background-color: ${theme.bgSecondary};
  box-shadow: ${theme.shadow};
`;

const LoginFormTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.textCol};
  text-align: center;
`;

const LoginDescriptionText = styled.p`
  color: ${theme.textColDisabled};
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const InputField = styled.input`
  border: 1px solid rgba(128, 128, 128, 0.61);
  outline: 0;
  color: ${theme.textCol};
  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
  padding: 0.75rem 0px;
  background-color: transparent;
  border-radius: .375rem;
  width: 100%;
  height: 100%;

  &:focus {
    border: 1px solid #1e88e5;
    box-shadow: ${theme.shadow};

  }
`;

const SubmitButton = styled.button`
  height: ${theme.inputHeight};
  border: none;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.buttonCol};
  color: #fff;
  font-size: ${theme.textSize};
  cursor: pointer;

  &:hover {
    background-color: ${theme.buttonColHovered};
  }

  &:focus {
    outline: none;
    box-shadow: ${theme.shadow};
  }
`;

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Email and password fields cannot be empty!');
      return;
    }
  
    try {
      const response = await fetch(`${apiLink}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (response.ok) {
        const responseJson = await response.json();
        const account = responseJson.account;
        localStorage.setItem('account', JSON.stringify(account));
        navigate('/market');
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Failed to connect to API:', error);
      alert('Failed to connect to API. Please try again later.');
    }
  };
  

  return (
    <LoginFormContainer>
      <LoginFormTitle>Sign In</LoginFormTitle>
      <LoginDescriptionText>Get started with our app, just create an account and enjoy the experience.</LoginDescriptionText>

      <Form onSubmit={handleSubmit}>
        <p>Email</p>
        <FormField>
          <InputField type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormField>
        <p>Password</p>
        <FormField>
          <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormField>
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
      <p>Dont have an account? <a href="#/signup"> Sign up</a></p>
    </LoginFormContainer>
  );
}

export default LoginForm;