import styled from 'styled-components';

interface GroupProps {
  align?: 'center' | 'start' | 'end' | 'stretch';
  grow?: boolean;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  wrap?: boolean;
  gap?: number;
  width?: number;
  height?: number;
}

const MyGroup = styled.div<GroupProps>`
  display: flex;
  align-items: ${({ align = 'start' }) => align};
  justify-content: ${({ justify = 'start' }) => justify};
  flex-grow: ${({ grow = false }) => (grow ? 1 : 0)};
  flex-wrap: ${({ wrap = false }) => (wrap ? 'wrap' : '')};
  gap: ${({ gap }) => (gap ? gap + 'px' : '')};

  max-width: ${({ width }) => (width ? width + 'px' : '')};
  height: ${({ height }) => (height ? height + 'px' : '')};
`;

export { MyGroup, GroupProps };
