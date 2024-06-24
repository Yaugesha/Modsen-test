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
    color: ${props => props.theme.colors.secondary};

    max-width: 1248px;
    padding: 64px 96px 16px;
    margin: 0 auto;
  }

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
`;

export { GlobalStyle };
