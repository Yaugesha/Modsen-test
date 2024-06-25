import Button from '@components/Button';
import Input from '@components/Input';
import { AuthorizationForm, AuthorizationParams } from '@pages/Authorization';
import { RegistartionForm, RegistrtionParams } from '@pages/Registartion';
import { useFormik } from 'formik';
import { AnyObject } from 'yup';

import { ErrorMessage, FormField, FormLabel, StyledForm } from './styled';

export interface formInputProp {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

type FormValues = RegistartionForm | AuthorizationForm;

interface FormProps {
  validationSchema: AnyObject;
  initialValues: RegistartionForm | AuthorizationForm;
  fields: formInputProp[];
  handleSubmit: (credentials: RegistrtionParams | AuthorizationParams) => void;
  submitButtonName: string;
}

const Form = ({
  validationSchema,
  initialValues,
  fields,
  handleSubmit,
  submitButtonName,
}: FormProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {fields.map((inputField: formInputProp) => {
        const formikFieldParam = inputField.id as keyof FormValues;
        return (
          <FormField key={inputField.id}>
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
      <Button name={submitButtonName} type="submit" />
    </StyledForm>
  );
};

export default Form;
