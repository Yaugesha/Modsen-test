import { MyGroup } from './styled';
import { GroupProps } from './types';

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
