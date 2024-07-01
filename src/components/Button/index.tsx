import { StyledButton } from './styled';

interface ButtonProps {
  name: string;
  handleClick?: () => void;
  disabled?: boolean;
  type?: string;
  size: string;
}

const Button = ({ name, handleClick, disabled, type, size }: ButtonProps) => {
  return (
    <StyledButton
      buttonSize={size}
      disabled={disabled}
      onClick={handleClick}
      type={type}>
      {name}
    </StyledButton>
  );
};

export default Button;
