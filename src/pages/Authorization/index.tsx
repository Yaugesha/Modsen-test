import Form, { formInputProp, FormParams } from '@components/Form';
import { auth } from '@services/firebaseApi';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import {
  FormContainer,
  FormTitle,
  LinkToRegistartion,
  MessageToRegistartion,
} from './styled';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export interface AuthorizationForm {
  email: string;
  password: string;
}

export interface AuthorizationParams {
  email: string;
  password: string;
}

const Authorization = () => {
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
  ];

  const initialValues: AuthorizationForm = {
    email: '',
    password: '',
  };

  const handleAuthorization = async (credentials: FormParams) => {
    const AuthCredentials = credentials as AuthorizationParams;
    const email = AuthCredentials.email;
    const password = AuthCredentials.password;

    signInWithEmailAndPassword(auth, email, password)
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
      <FormTitle>Authorization</FormTitle>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        fields={fields}
        handleSubmit={handleAuthorization}
        submitButtonName="Sign In"
        type="flex"
      />
      <MessageToRegistartion>
        Don't have an account?{' '}
        <Link to="/registration">
          <LinkToRegistartion>Sign Up</LinkToRegistartion>
        </Link>
      </MessageToRegistartion>
    </FormContainer>
  );
};

export default Authorization;
