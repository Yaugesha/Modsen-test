import cartImage from '@assets/images/icons/cart.svg';
import loginImage from '@assets/images/icons/login.svg';
import logoImage from '@assets/images/logo/desktop.png';
import Group from '@components/Containers/Group';
import { Link } from 'react-router-dom';

import { Icon, Logo, NavItem, NavList, StyledHeader, Switcher } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logoImage} alt="logo" />
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
            <Link to="/product/1">
              <NavItem>Contacts</NavItem>
            </Link>
          </NavList>
        </nav>
        <Switcher />
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
