interface GroupProps extends MyGroupProps {
  children: JSX.Element | JSX.Element[];
}

interface MyGroupProps {
  align?: 'center' | 'start' | 'end' | 'stretch';
  grow?: boolean;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  wrap?: boolean;
  gap?: number;
  width?: number;
  height?: number;
}

export { GroupProps, MyGroupProps };
