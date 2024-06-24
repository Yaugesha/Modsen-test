import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled';
import Header from '@components/Header/index';
import Footer from '@components/Footer';
import { baseTheme } from '@constants/themes';

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
