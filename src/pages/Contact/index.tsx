import Stack from '@components/Containers/Stack';
import Form, { formInputProp } from '@components/Form';
import * as Yup from 'yup';

import { ContactDescribtion, Heading, StyledContact } from './styled';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

export interface ContactPrams {
  firstName: string;
  lastName: string;
  emai: string;
  subject: string;
  message: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  emai: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const fields: formInputProp[] = [
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
      placeholder: 'Subjsect',
    },
    {
      id: 'message',
      type: 'text',
      placeholder: 'Message',
    },
  ];

  const initialValues: ContactForm = {
    firstName: '',
    lastName: '',
    emai: '',
    subject: '',
    message: '',
  };

  return (
    <StyledContact>
      <Stack align="center" gap={40}>
        <Heading>Contact Us</Heading>
        <ContactDescribtion>
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </ContactDescribtion>
      </Stack>
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        fields={fields}
        handleSubmit={async () => {}}
        submitButtonName="Send"
        type="grid"
      />
    </StyledContact>
  );
};

export default Contact;
