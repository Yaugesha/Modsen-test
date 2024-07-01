export interface InputProps {
  inputHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  id?: string;
  type: string;
  buttonImage?: string;
}
