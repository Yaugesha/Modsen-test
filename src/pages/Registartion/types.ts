import * as Yup from 'yup';

import { validationSchema } from './validation';

type RegistartionForm = Yup.InferType<typeof validationSchema>;

export { RegistartionForm };
