import styled from 'styled-components';

import { MyStackProps } from './types';

const MyStack = styled.div<MyStackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : '')};
  justify-content: ${({ justify = 'start' }) => justify};
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  max-width: ${({ width }) => (width ? width + 'px' : '')};
  height: ${({ height }) => (height ? height + 'px' : '')};
`;

export { MyStack };
