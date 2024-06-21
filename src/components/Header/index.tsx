import logoImage from '@assets/images/logo/desktop.png';
import cartImage from '@assets/images/icons/cart.svg';
import searchImage from '@assets/images/icons/search.svg';
import {
  StyledHeader,
  Logo,
  NavList,
  NavItem,
  Menu,
  Switcher,
  Icon,
} from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logoImage} alt="logo" />
      <Menu>
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
        <Icon src={cartImage} alt="cart" />
      </Menu>
    </StyledHeader>
  );
};

export default Header;
