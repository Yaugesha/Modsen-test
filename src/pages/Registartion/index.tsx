import Form, { formInputProp, FormParams } from '@components/Form';
import { auth } from '@services/firebaseApi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import {
  FormContainer,
  FormTitle,
  LinkToAuthorization,
  MessageToAuthorization,
} from './styled';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export interface RegistartionForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegistrtionParams {
  email: string;
  password: string;
}

const Registration = () => {
  const fields: formInputProp[] = [
    {
      id: 'email',
      type: 'text',
      label: 'Email Address',
      placeholder: 'email',
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'password',
    },
    {
      id: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'password',
    },
  ];

  const initialValues: RegistartionForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleRegistration = async (credentials: FormParams) => {
    const RegistrationCredentials = credentials as RegistrtionParams;
    const email = RegistrationCredentials.email;
    const password = RegistrationCredentials.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <FormContainer>
      <FormTitle>Registration</FormTitle>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        fields={fields}
        handleSubmit={handleRegistration}
        submitButtonName="Sign In"
        type="flex"
      />
      <MessageToAuthorization>
        Already have an account?{' '}
        <Link to="/authorization">
          <LinkToAuthorization>Sign In</LinkToAuthorization>
        </Link>
      </MessageToAuthorization>
    </FormContainer>
  );
};

export default Registration;
