import { StyledButton } from './styled';

interface ButtonProps {
  name: string;
  handleClick: () => void;
}

const Button = ({ name, handleClick }: ButtonProps) => {
  return <StyledButton onClick={handleClick}>{name}</StyledButton>;
};

export default Button;
