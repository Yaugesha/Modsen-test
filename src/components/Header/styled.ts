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

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  width: 182px;
`;

const NavItem = styled.li`
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;

  &:active {
    padding-bottom: ${props => props.theme.paddings.m};
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
`;

const Switcher = styled.div`
  position: relative;

  border: none;
  border-radius: ${props => props.theme.borderR.round};

  background-color: ${props => props.theme.colors.grey};

  width: 45px;
  height: 22px;

  cursor: pointer;

  &:before {
    position: absolute;
    top: 2px;
    left: 2px;

    content: '';
    background-color: ${props => props.theme.colors.main};
    border-radius: ${props => props.theme.borderR.round};

    width: 18px;
    height: 18px;
  }
`;

const Icon = styled.img`
  cursor: pointer;

  &:active {
    padding-bottom: ${props => props.theme.paddings.m};
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
`;

export { Icon, Logo, NavItem, NavList, StyledHeader, Switcher };
