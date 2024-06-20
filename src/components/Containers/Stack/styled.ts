import styled from 'styled-components';

interface StackProps {
  align?: 'center' | 'start' | 'end' | 'stretch';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  gap?: number;
  width?: number;
  height?: number;
}

const MyStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align = 'start' }) => align};
  justify-content: ${({ justify = 'start' }) => justify};
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  max-width: ${({ width }) => (width ? width + 'px' : '')};
  height: ${({ height }) => (height ? height + 'px' : '')};
`;

export { MyStack, StackProps };
