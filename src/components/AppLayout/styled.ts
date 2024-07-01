import font from '@assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf';
import styled, { createGlobalStyle } from 'styled-components';

const BODY_PADDING = '64px 96px 16px';
const BODY_WIDTH = '1248px';
const CONTAINER_PADDING = '0PX 0PX 200px';

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
    background-color: ${props => props.theme.colors.main};

    max-width: ${BODY_WIDTH};
    padding: ${BODY_PADDING};
    margin: ${props => props.theme.margins.center};
  }

  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  input {
    background-color: ${props => props.theme.colors.main};
    border: none;
    outline: none;


    padding: 0px 0px 6px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;

      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }
  }

`;

const Container = styled.div`
  position: relative;

  min-height: calc(100vh - ${CONTAINER_PADDING});
  padding: ${CONTAINER_PADDING};
`;

export { Container, GlobalStyle };
