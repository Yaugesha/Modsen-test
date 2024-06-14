import Header from '@components/Header/index';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme } from './styled';

const AppLayout = () => {
  const theme = {
    ...lightTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default AppLayout;
