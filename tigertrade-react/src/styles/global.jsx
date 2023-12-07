import styled from 'styled-components';
import theme from './themes';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');



  body {
    background-color: ${theme.bgPrimary};
    color: ${theme.textCol};
    font-family: 'Noto Sans', sans-serif;
    padding: 40px;
    margin: 0;
    height: 100%;

    @media screen and (max-width: 600px) {
      padding: 20px;
    }
  }

  button {
    border-radius: 4px;
    background-color: ${theme.buttonCol};
    border: none;
    color: ${theme.textCol};
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;

    padding: 8px 16px;

    &:hover {
      background-color: ${theme.buttonColHovered};
    }
  
    &:focus {
      outline: none;
      box-shadow: ${theme.shadow};
    }
  }

  footer {
    text-align: center;
    width: 100%;
    margin: 0;
    height: 50px;
    padding: 10px 0;
  }

  input {
    background-color: ${theme.bgFormsCol};
    border: none;
    border-radius: 5px;
    color: ${theme.textCol};
    font-size: 16px;
    margin-bottom: 8px;
    width: 100%;
    min-height: 24px;
    text-indent: 6px;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #fff;
    }
  
`;

export default GlobalStyle