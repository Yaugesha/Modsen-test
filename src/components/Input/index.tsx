import { StyledInput, InputWrapper, InputButton } from './styled';

interface InputProps {
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: string;
  buttonImage: string;
}

const Input = ({
  inputHandler,
  placeholder,
  type,
  buttonImage,
}: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={inputHandler}
      />
      <InputButton src={buttonImage} alt="search" />
    </InputWrapper>
  );
};

export default Input;
