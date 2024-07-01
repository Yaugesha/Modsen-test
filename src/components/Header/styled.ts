import styled from 'styled-components';

const HEADER_WIDTH = '1248px';
const HEADER_HEIGHT = '42px';

const HEADER_NAV_LIST = '182px';

const SWITCHER_WIDTH = '45px';
const SWITCHER_HEIGHT = '22px';
const SWITCHER_BUTTON_SIZE = '18px';
const SWITCHER_BUTTON_TOP = '2px';

const LOGO_WIDTH = '287px';
const LOGO_HEIGHT = '32px';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: ${HEADER_WIDTH};
  height: ${HEADER_HEIGHT};
`;

const Logo = styled.img`
  width: ${LOGO_WIDTH};
  height: ${LOGO_HEIGHT};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  width: ${HEADER_NAV_LIST};
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

  width: ${SWITCHER_WIDTH};
  height: ${SWITCHER_HEIGHT};

  cursor: pointer;

  &:before {
    position: absolute;
    top: ${SWITCHER_BUTTON_TOP};
    left: var(--left, ${SWITCHER_BUTTON_TOP});

    content: '';
    background-color: ${props => props.theme.colors.main};
    border-radius: ${props => props.theme.borderR.round};

    width: ${SWITCHER_BUTTON_SIZE};
    height: ${SWITCHER_BUTTON_SIZE};
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
