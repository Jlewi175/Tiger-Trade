import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/tigertrade-logo.png';
import LoginForm from '../components/LoginForm';
import theme from '../styles/themes';

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-wrap: wrap; /* wrap child elements onto new lines when screen is too small */
`;

const LeftSection = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 0 auto;

`;

const Title = styled.p`
  color: rgba(189, 178, 30, 1.0);
  font-weight: 600;
  font-size: 3rem;
  text-align: left;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  color: ${theme.textColDisabled};
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto; 
  width: 350px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;


function Landing() {
  
  return (
      <ContentContainer>
        <LeftSection>
          <Title>TigerTrade.</Title>
          <Subtitle>The home for Towson University students to buy or sell goods and services.</Subtitle>
          <Logo src={logo} alt="TigerTrade Logo" />
        </LeftSection>
          <LoginForm />
      </ContentContainer>
  );
};

export default Landing;

