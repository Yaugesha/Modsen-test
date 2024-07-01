import styled from 'styled-components';

const FILTERS_WIDTH = '260px';

const StyledFilters = styled.aside`
  display: flex;
  flex-flow: column;
  gap: 40px;

  max-width: ${FILTERS_WIDTH};
`;

export { StyledFilters };
