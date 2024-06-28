import Stack from '@components/Containers/Stack';
import Form from '@components/Form';
import { CONTACT_FIELDS } from '@constants/forms';

import { ContactDescribtion, Heading, StyledContact } from './styled';
import { ContactForm } from './types';
import { validationSchema } from './validation';

const Contact = () => {
  const initialValues: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
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
        fields={CONTACT_FIELDS}
        handleSubmit={async () => {}}
        submitButtonName="Send"
        type="grid"
      />
    </StyledContact>
  );
};

export default Contact;
