import { MyStack } from './styled';
import { StackProps } from './types';

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
