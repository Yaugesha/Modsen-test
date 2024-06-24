import logoImage from '@assets/images/logo/desktop.png';
import cartImage from '@assets/images/icons/cart.svg';
import searchImage from '@assets/images/icons/search.svg';
import { StyledHeader, Logo, NavList, NavItem, Switcher, Icon } from './styled';
import { Link } from 'react-router-dom';
import Group from '@components/Containers/Group';

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
        <Icon src={searchImage} alt="search" />
        <Link to="/cart">
          <Icon src={cartImage} alt="cart" />
        </Link>
      </Group>
    </StyledHeader>
  );
};

export default Header;
