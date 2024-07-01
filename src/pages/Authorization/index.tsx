import Form from '@components/Form';
import { FormParams } from '@components/Form/types';
import { AUTHORIZATION_FIELDS } from '@constants/forms';
import { REGISTRATION_ROUTE } from '@constants/routes';
import { AuthCredentials } from '@customTypes/authCredentials';
import { useAppDispatch } from '@hooks/store/useAppDispatch';
import { auth } from '@services/firebaseApi';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import {
  FormContainer,
  FormTitle,
  LinkToRegistartion,
  MessageToRegistartion,
} from './styled';
import { AuthorizationForm } from './types';
import { validationSchema } from './validation';

const Authorization = () => {
  const dispatch = useAppDispatch();

  const initialValues: AuthorizationForm = {
    email: '',
    password: '',
  };

  const handleAuthorization = async (credentials: FormParams) => {
    const AuthCredentials = credentials as AuthCredentials;
    const email = AuthCredentials.email;
    const password = AuthCredentials.password;

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = {
          isAuthenticated: !userCredential.user.isAnonymous,
          userId: userCredential.user.uid,
        };
        dispatch({ type: 'user/authenticate', payload: user });
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
        fields={AUTHORIZATION_FIELDS}
        handleSubmit={handleAuthorization}
        submitButtonName="Sign In"
        type="flex"
      />
      <MessageToRegistartion>
        Don't have an account?{' '}
        <Link to={REGISTRATION_ROUTE}>
          <LinkToRegistartion>Sign Up</LinkToRegistartion>
        </Link>
      </MessageToRegistartion>
    </FormContainer>
  );
};

export default Authorization;
