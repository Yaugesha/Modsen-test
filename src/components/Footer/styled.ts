import styled from 'styled-components';

const FOOTER_GAP = '50px';
const FOOTER_WIDTH = '1248px';
const FOOTER_HEIGHT = '159px';
const FOOTER_GRID_COL = '32%';
const FOOTER_GRID_ROW = '41px';

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0px;

  display: grid;
  grid-template-columns: auto ${FOOTER_GRID_COL};
  grid-template-rows: repeat(2, ${FOOTER_GRID_ROW});
  row-gap: ${FOOTER_GAP};
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${props => props.theme.colors.grey};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.colors.darkGrey};

  width: 100%;
  max-width: ${FOOTER_WIDTH};
  height: ${FOOTER_HEIGHT};
  padding-top: ${props => props.theme.paddings.l};
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  column-gap: ${props => props.theme.gaps.xxl};

  list-style: none;
  text-transform: uppercase;

  width: auto;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  border: none;
  outline: none;

  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.colors.secondary};

  padding-bottom: ${props => props.theme.paddings.s};
`;

const Highlited = styled.span`
  color: ${props => props.theme.colors.secondary};
`;

export { Highlited, Input, NavList, StyledFooter };
