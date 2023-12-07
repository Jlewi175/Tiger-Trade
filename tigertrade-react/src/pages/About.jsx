import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { PageContainer } from '../styles/styles';

function About() {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <h1>About Us</h1>
        <p>Welcome to Our Store, your one-stop shop for all your shopping needs. We are a team of dedicated professionals committed to providing our customers with the best products at affordable prices.</p>
        <h2>Our History</h2>
        <p>Our Store was founded in 2023 by a group of students with a passion for e-commerce. Our goal was to create a platform that would make it easy for TU students to shop for everything they need in one place. </p>
        <h2>Our Mission</h2>
        <p>At Our Store, our mission is to provide our customers with a seamless shopping experience from start to finish. We believe that shopping should be easy and stress-free, which is why we have worked hard to create a platform that is user-friendly and intuitive. We are committed to providing our customers with the best possible products at the most affordable prices.</p>
        <h2>Our Team</h2>
        <p>Our team is made up of dedicated professionals with years of experience in e-commerce. We are passionate about what we do and are committed to providing our customers with the best possible service. From our customer service representatives to our developers and designers, we are all committed to making Our Store the best possible shopping destination.</p>
      </PageContainer>
    </div>
  );
}
export default About;
