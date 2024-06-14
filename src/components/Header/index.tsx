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

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logoImage} alt="logo" />
      <Menu>
        <nav>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Contacts</NavItem>
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
