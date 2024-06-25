import { StyledButton } from './styled';

interface ButtonProps {
  name: string;
  handleClick?: () => void;
  disabled?: boolean;
  type?: string;
}

const Button = ({ name, handleClick, disabled, type }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick} type={type}>
      {name}
    </StyledButton>
  );
};

export default Button;
