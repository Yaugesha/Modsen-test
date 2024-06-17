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
    color: ${props => props.theme.secondary};

    max-width: 1248px;
    padding: 64px 96px 16px;
    margin: 0 auto;
  }
`;

const lightTheme = {
  accent: '#a18a68',
  main: '#ffffff',
  secondary: '#000000',
  darkGrey: '#707070',
  grey: '#d8d8d8',
  lightGrey: '#efefef',
  error: '#d82700',
};

const darkTheme = {
  accent: '#a18a68',
  secondary: '#ffffff',
  main: '#000000',
  lightGrey: '#707070',
  grey: '#d8d8d8',
  darkGrey: '#efefef',
  error: '#d82700',
};

const typography = {
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: '33px',
    },
    h2: {
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '35px',
    },
    h3: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '26px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '20px',
    },
    h5: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '27px',
    },
    l: {
      fontWeight: 700,
      fontSize: '16px',
    },
    m: {
      fontWeight: 400,
      fontSize: '14px',
    },
    s: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
};

export { GlobalStyle, lightTheme, darkTheme, typography };
