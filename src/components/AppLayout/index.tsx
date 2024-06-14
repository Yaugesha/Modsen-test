import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, typography } from './styled';
import Header from '@components/Header/index';
import Footer from '@components/Footer';

const AppLayout = () => {
  const theme = {
    ...lightTheme,
    ...typography,
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
