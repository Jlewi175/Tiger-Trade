import React from 'react';
import styled from 'styled-components';
import theme from '../styles/themes';
import SignupForm from '../components/SignupForm';

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex-wrap: wrap; /* wrap child elements onto new lines when screen is too small */
`;

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  margin: 0 auto;

`;

const Title = styled.p`
  color: rgba(189, 178, 30, 1.0);
  font-weight: 600;
  font-size: 2.4rem;
  text-align: left;
  margin-bottom: 4px;
`;


function Signup() {
  return (
      <ContentContainer>
        <Container>
          <Title>TigerTrade.</Title>
          <SignupForm />
        </Container>
      </ContentContainer>
  );
};

export default Signup;
