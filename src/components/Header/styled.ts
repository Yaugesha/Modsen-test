import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1248px;
  height: 42px;
`;

const Logo = styled.img`
  width: 287px;
  height: 32px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 376px;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  width: 182px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  color: ${props => props.theme.secondary};
  cursor: pointer;

  &:active {
    padding-bottom: 8px;
    border-bottom: 2px solid ${props => props.theme.secondary};
  }
`;

const Switcher = styled.div`
  position: relative;

  border: none;
  border-radius: 99px;

  background-color: ${props => props.theme.grey};

  width: 45px;
  height: 22px;

  cursor: pointer;

  &:before {
    position: absolute;
    top: 2px;
    left: 2px;

    content: '';
    background-color: ${props => props.theme.main};
    border-radius: 99px;

    width: 18px;
    height: 18px;
  }
`;

const Icon = styled.img`
  cursor: pointer;

  &:active {
    padding-bottom: 8px;
    border-bottom: 2px solid ${props => props.theme.secondary};
  }
`;

export { StyledHeader, Logo, NavList, NavItem, Menu, Switcher, Icon };
