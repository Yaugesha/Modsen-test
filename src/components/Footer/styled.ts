import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: auto 32%;
  grid-template-rows: repeat(2, 41px);
  row-gap: 50px;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid ${props => props.theme.grey};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.darkGrey};

  max-width: 1248px;
  height: 159px;
  padding-top: 40px;
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  column-gap: 41px;

  list-style: none;
  text-transform: uppercase;

  width: auto;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  border: none;
  outline: none;

  border-bottom: 1px solid ${props => props.theme.secondary};

  ${props => props.theme.typography.h5}
  color: ${props => props.theme.secondary};

  padding-bottom: 6px;
`;

const Highlited = styled.span`
  color: ${props => props.theme.secondary};
`;

export { StyledFooter, NavList, Input, Highlited };
