import Footer from '@components/Footer';
import Header from '@components/Header/index';
import { baseTheme } from '@constants/themes';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styled';

const AppLayout = () => {
  const theme = {
    ...baseTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default AppLayout;
