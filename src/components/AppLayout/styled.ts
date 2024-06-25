import font from '@assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.main};;

    max-width: 1248px;
    padding: 64px 96px 16px;
    margin: 0 auto;
  }

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

`;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 280px);
  padding-bottom: 200px;
`;

export { Container, GlobalStyle };
