import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
`;

function Footer() {
  return (
    <footer>
      <p>© 2023 TigerTrade &nbsp;&nbsp;&nbsp;&nbsp; <a href="/COSC484/#/about">About Us</a></p>
    </footer>
  );
}

export default Footer;