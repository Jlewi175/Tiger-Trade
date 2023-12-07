import styled from 'styled-components';
import theme from '../styles/themes';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { apiLink } from '../data';

const SignupFormContainer = styled.div`
  width: 22rem;
  margin: 0 auto;
  padding: 4px 32px 22px 32px;
  border-radius: 8px;
  background-color: ${theme.bgSecondary};
  box-shadow: ${theme.shadow};
`;

const SignupFormTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.textCol};
  text-align: center;
`;

const SignupDescriptionText = styled.p`
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
  line-height: 1.25rem;
  padding: 8px 0;
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

function SignupForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !password || !confirmPassword || !accountType) {
      alert('All fields must be filled!');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Password and confirm password fields must match!');
      return;
    }
  
    const user = {
      username,
      email,
      password,
      accountType,
    };
  
    try {
      const response = await fetch(`${apiLink}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        navigate('/');
      } else {
        const responseData = await response.json();
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Failed to sign up. Please try again later.');
    }
  };
  
  
  return (
    <SignupFormContainer>
      <SignupFormTitle>Sign Up</SignupFormTitle>
      <SignupDescriptionText>Create your new account below</SignupDescriptionText>

      <Form onSubmit={handleSubmit}>
        <FormField>
          <InputField type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormField>
        <FormField>
          <InputField type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormField>
        <FormField>
          <InputField type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormField>
        <FormField>
          <InputField type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </FormField>
        <FormField>
          <select required value={accountType} onChange={(e) => setAccountType(e.target.value)}>
            <option value="">Select Account Type</option>
            <option value="buyer">buyer</option>
            <option value="seller">seller</option>
          </select>
        </FormField>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </SignupFormContainer>
  );
}
export default SignupForm;
