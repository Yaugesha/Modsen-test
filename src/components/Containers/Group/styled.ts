import styled from 'styled-components';

import { MyGroupProps } from './types';

const MyGroup = styled.div<MyGroupProps>`
  display: flex;
  align-items: ${({ align = 'start' }) => align};
  justify-content: ${({ justify = 'start' }) => justify};
  flex-grow: ${({ grow = false }) => (grow ? 1 : 0)};
  flex-wrap: ${({ wrap = false }) => (wrap ? 'wrap' : '')};
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  max-width: ${({ width }) => (width ? width + 'px' : '')};
  height: ${({ height }) => (height ? height + 'px' : '')};
`;

export { MyGroup };
