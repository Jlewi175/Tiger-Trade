import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/themes';
import { Link, useLocation } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.accentCol};
  color: white;
  width: 100%;
  border-radius: 10px;

  /* media query for smaller screens */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px 10px 0;
  }
`;

const navBarAnimation = css`
  position: relative;
  padding: 0 2px;
  &::before {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: 6px;
    background-color: #00e1ff;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }
`;

export const NavItem = styled(Link)`
  color: ${theme.textCol};
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
  ${navBarAnimation}

  &.active::before,
  &:hover::before {
    transform: scaleX(1);
  }

  /* media query for smaller screens */
  @media screen and (max-width: 600px) {
    margin: 0 5px;
  }
`;

export const Title = styled.h1`
  padding-left: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

function NavBar() {
  const location = useLocation();

  return (
    <NavContainer>
      <Title>TigerTrade</Title>
      <div>
        <NavItem to="/market" className={location.pathname === "/market" ? "active" : ""}>Buy</NavItem>
        <NavItem to="/seller" className={location.pathname === "/seller" ? "active" : ""}>Sell</NavItem>
        <NavItem to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart</NavItem>
        <NavItem to="/account" className={location.pathname === "/account" ? "active" : ""}>Account</NavItem>
        <NavItem to="/" className={location.pathname === "/" ? "active" : ""}>Log Out</NavItem>
      </div>
    </NavContainer>
  );
}

export default NavBar;
