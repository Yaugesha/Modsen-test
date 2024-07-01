import Form from '@components/Form';
import { FormParams } from '@components/Form/types';
import { REGISTRATION_FIELDS } from '@constants/forms';
import { AUTHORIZATIO_ROUTE } from '@constants/routes';
import { AuthCredentials } from '@customTypes/authCredentials';
import { useAppDispatch } from '@hooks/store/useAppDispatch';
import { auth } from '@services/firebaseApi';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

import {
  FormContainer,
  FormTitle,
  LinkToAuthorization,
  MessageToAuthorization,
} from './styled';
import { RegistartionForm } from './types';
import { validationSchema } from './validation';

const Registration = () => {
  const dispatch = useAppDispatch();

  const initialValues: RegistartionForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleRegistration = async (credentials: FormParams) => {
    const RegistrationCredentials = credentials as AuthCredentials;
    const email = RegistrationCredentials.email;
    const password = RegistrationCredentials.password;

    createUserWithEmailAndPassword(auth, email, password)
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
      <FormTitle>Registration</FormTitle>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        fields={REGISTRATION_FIELDS}
        handleSubmit={handleRegistration}
        submitButtonName="Sign In"
        type="flex"
      />
      <MessageToAuthorization>
        Already have an account?{' '}
        <Link to={AUTHORIZATIO_ROUTE}>
          <LinkToAuthorization>Sign In</LinkToAuthorization>
        </Link>
      </MessageToAuthorization>
    </FormContainer>
  );
};

export default Registration;
