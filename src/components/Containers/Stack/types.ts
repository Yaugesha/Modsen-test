interface StackProps extends MyStackProps {
  children: JSX.Element | JSX.Element[];
}

interface MyStackProps {
  align?: 'center' | 'start' | 'end' | 'stretch';
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  gap?: number;
  width?: number;
  height?: number;
}

export { MyStackProps, StackProps };
