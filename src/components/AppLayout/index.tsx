import Footer from '@components/Footer';
import Header from '@components/Header/index';
import {
  baseTheme,
  darkThemeColors,
  lightThemeColors,
} from '@constants/themes';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/store/useAppSelector';
import { ThemeProvider } from 'styled-components';

import { Container, GlobalStyle } from './styled';

interface colors {
  accent: string;
  main: string;
  secondary: string;
  darkGrey: string;
  grey: string;
  lightGrey: string;
  error: string;
}

const AppLayout = () => {
  const [theme, setTheme] = useState(baseTheme);
  const themeState = useAppSelector(state => state.theme);

  const toggleThemeColors = (colors: colors) => {
    setTheme({ ...theme, colors: colors });
  };

  useEffect(() => {
    !themeState.isDark
      ? toggleThemeColors(lightThemeColors)
      : toggleThemeColors(darkThemeColors);
  }, [themeState.isDark]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default AppLayout;
