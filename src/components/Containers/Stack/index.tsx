import { MyStack } from './styled';

interface StackProps {
  children: JSX.Element | JSX.Element[];
  align?: 'center' | 'start' | 'end' | 'stretch';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  gap?: number;
  width?: number;
  height?: number;
}

const Stack = ({
  children,
  align,
  justify,
  gap,
  width,
  height,
}: StackProps) => {
  return (
    <MyStack
      align={align}
      justify={justify}
      gap={gap}
      width={width}
      height={height}>
      {children}
    </MyStack>
  );
};

export default Stack;
