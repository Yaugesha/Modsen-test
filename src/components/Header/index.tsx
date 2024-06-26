import cartImage from '@assets/images/icons/cart.svg';
import loginImage from '@assets/images/icons/login.svg';
import logoImageDark from '@assets/images/logo/desktop-dark.svg';
import logoImageLight from '@assets/images/logo/desktop-light.svg';
import Group from '@components/Containers/Group';
import { useAppDispatch, useAppSelector } from '@utils/hooks/storeHooks';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon, Logo, NavItem, NavList, StyledHeader, Switcher } from './styled';

const Header = () => {
  const [logo, setLogo] = useState(logoImageLight);
  const switcher = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const themeState = useAppSelector(state => state.theme);

  const handleToggleTheme = () => {
    dispatch({ type: 'theme/toggle' });
    if (themeState.isDark) {
      setLogo(logoImageLight);
      switcher.current?.style.setProperty('--left', '2px');
    } else {
      setLogo(logoImageDark);
      switcher.current?.style.setProperty('--left', '23px');
    }
  };

  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <Group align="center" justify="space-between" gap={40}>
        <nav>
          <NavList>
            <Link to="/">
              <NavItem>Home</NavItem>
            </Link>
            <Link to="/shop">
              <NavItem>Shop</NavItem>
            </Link>
            <Link to="/contact">
              <NavItem>Contacts</NavItem>
            </Link>
          </NavList>
        </nav>
        <Switcher ref={switcher} onClick={handleToggleTheme} />
        <Link to="/cart">
          <Icon src={cartImage} alt="cart" />
        </Link>
        <Link to="/authorization">
          <Icon src={loginImage} alt="login" />
        </Link>
      </Group>
    </StyledHeader>
  );
};

export default Header;
