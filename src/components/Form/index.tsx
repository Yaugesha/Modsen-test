import Button from '@components/Button';
import Input from '@components/Input';
import { AuthorizationForm, AuthorizationParams } from '@pages/Authorization';
import { ContactForm, ContactPrams } from '@pages/Contact';
import { RegistartionForm, RegistrtionParams } from '@pages/Registartion';
import { useFormik } from 'formik';
import { AnyObject } from 'yup';

import {
  ErrorMessage,
  FormButton,
  FormField,
  FormLabel,
  StyledForm,
} from './styled';

export interface formInputProp {
  id: string;
  type: string;
  label?: string;
  placeholder: string;
}

type FormValues = RegistartionForm | AuthorizationForm | ContactForm;
export type FormParams = RegistrtionParams | AuthorizationParams | ContactPrams;

interface FormProps {
  validationSchema: AnyObject;
  initialValues: FormValues;
  fields: formInputProp[];
  handleSubmit: (credentials: FormParams) => Promise<void>;
  submitButtonName: string;
  type: 'flex' | 'grid';
}

const Form = ({
  validationSchema,
  initialValues,
  fields,
  handleSubmit,
  submitButtonName,
  type,
}: FormProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const getCharCode = (indx: number) => {
    if (type === 'grid') return String.fromCharCode(indx + 97);
  };

  return (
    <StyledForm type={type} onSubmit={formik.handleSubmit}>
      {fields.map((inputField: formInputProp, indx: number) => {
        const formikFieldParam = inputField.id as keyof FormValues;
        return (
          <FormField area={getCharCode(indx)} key={inputField.id}>
            <FormLabel htmlFor={inputField.id}>{inputField.label}</FormLabel>
            <Input
              inputHandler={formik.handleChange}
              placeholder={inputField.placeholder}
              id={inputField.id}
              type={inputField.type}
            />

            {formik.touched[formikFieldParam] &&
            formik.errors[formikFieldParam] ? (
              <ErrorMessage>{formik.errors[formikFieldParam]}</ErrorMessage>
            ) : null}
          </FormField>
        );
      })}
      <FormButton area={() => (type === 'grid' ? 'f' : '')}>
        <Button name={submitButtonName} type="submit" />
      </FormButton>
    </StyledForm>
  );
};

export default Form;
