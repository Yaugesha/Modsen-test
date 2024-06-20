import { MyGroup } from './styled';

interface GroupProps {
  children: JSX.Element | JSX.Element[];
  align?: 'center' | 'start' | 'end' | 'stretch';
  grow?: boolean;
  justify?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly';
  wrap?: boolean;
  gap?: number;
  width?: number;
  height?: number;
}

const Group = ({
  children,
  align,
  grow,
  justify,
  wrap,
  gap,
  width,
  height,
}: GroupProps) => {
  return (
    <MyGroup
      align={align}
      grow={grow}
      justify={justify}
      wrap={wrap}
      gap={gap}
      width={width}
      height={height}>
      {children}
    </MyGroup>
  );
};

export default Group;
