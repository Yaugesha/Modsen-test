import { formInputProp } from '@components/Form/types';

const REGISTRATION_FIELDS: formInputProp[] = [
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

const AUTHORIZATION_FIELDS: formInputProp[] = [
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

const CONTACT_FIELDS: formInputProp[] = [
  {
    id: 'firstName',
    type: 'text',
    placeholder: 'First name',
  },
  {
    id: 'lastName',
    type: 'text',
    placeholder: 'Last name',
  },
  {
    id: 'email',
    type: 'text',
    placeholder: 'Email',
  },
  {
    id: 'subject',
    type: 'text',
    placeholder: 'Subject',
  },
  {
    id: 'message',
    type: 'text',
    placeholder: 'Message',
  },
];

export { AUTHORIZATION_FIELDS, CONTACT_FIELDS, REGISTRATION_FIELDS };
