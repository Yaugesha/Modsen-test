import * as Yup from 'yup';

import { validationSchema } from './validation';

type ContactForm = Yup.InferType<typeof validationSchema>;

export { ContactForm };
