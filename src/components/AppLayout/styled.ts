import { createGlobalStyle } from 'styled-components';
import font from '@assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${font}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DM Sans', sans-serif;

    max-width: 1440px;
    margin: 0 auto;
  }
`;

const lightTheme = {
  accent: '#f18a168',
  main: '#ffffff',
  secondary: '#000000',
  darkGrey: '#707070',
  grey: '#d8d8d8',
  lightGrey: '#efefef',
  error: '#d82700',
};

const darkTheme = {
  accent: '#f18a68',
  secondary: '#ffffff',
  main: '#000000',
  lightGrey: '#707070',
  grey: '#d8d8d8',
  darkGrey: '#efefef',
  error: '#d82700',
};

export { GlobalStyle, lightTheme, darkTheme };
