import * as Yup from 'yup';

import { validationSchema } from './validation';

type AuthorizationForm = Yup.InferType<typeof validationSchema>;

export { AuthorizationForm };
