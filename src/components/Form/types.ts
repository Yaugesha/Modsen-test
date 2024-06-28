import { AuthCredentials } from '@customTypes/authCredentials';
import { AuthorizationForm } from '@pages/Authorization/types';
import { ContactForm } from '@pages/Contact/types';
import { RegistartionForm } from '@pages/Registartion/types';
import { AnyObject } from 'yup';

export interface formInputProp {
  id: string;
  type: string;
  label?: string;
  placeholder: string;
}

export type FormValues = RegistartionForm | AuthorizationForm | ContactForm;
export type FormParams = AuthCredentials | ContactForm;

export interface FormProps {
  validationSchema: AnyObject;
  initialValues: FormValues;
  fields: formInputProp[];
  handleSubmit: (credentials: FormParams) => Promise<void>;
  submitButtonName: string;
  type: 'flex' | 'grid';
}
