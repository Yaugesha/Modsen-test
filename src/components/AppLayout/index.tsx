import Footer from '@components/Footer';
import Header from '@components/Header/index';
import { baseTheme } from '@constants/themes';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container, GlobalStyle } from './styled';

const AppLayout = () => {
  const theme = {
    ...baseTheme,
  };

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
