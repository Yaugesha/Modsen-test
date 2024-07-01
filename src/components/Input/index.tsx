import { InputButton, InputWrapper, StyledInput } from './styled';
import { InputProps } from './types';

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
