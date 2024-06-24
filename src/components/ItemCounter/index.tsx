import Group from '@components/Containers/Group';
import { CounterButton, Counter } from './styled';

interface ItemCounterProps {
  count: number;
  handleIncriment: () => void;
  handleDecriment: () => void;
}

const ItemCounter = ({
  count,
  handleIncriment,
  handleDecriment,
}: ItemCounterProps) => {
  return (
    <Group align="center" gap={4}>
      <CounterButton onClick={handleDecriment}>-</CounterButton>
      <Counter>{count}</Counter>
      <CounterButton onClick={handleIncriment}>+</CounterButton>
    </Group>
  );
};

export default ItemCounter;
