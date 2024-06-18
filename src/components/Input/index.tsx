import { StyledInput, InputWrapper, InputButton } from './styled';

interface InputProps {
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  id?: string;
  type: string;
  buttonImage?: string;
}

const Input = ({
  inputHandler,
  placeholder,
  type,
  buttonImage,
  defaultValue,
  value,
  id,
}: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={inputHandler}
        defaultValue={defaultValue}
        value={value}
        id={id}
      />
      {buttonImage && <InputButton src={buttonImage} alt="action" />}
    </InputWrapper>
  );
};

export default Input;
