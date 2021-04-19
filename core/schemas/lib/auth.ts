import { auth } from '@core/i18n';
import * as Yup from 'yup';

const {
  fields,
} = auth;

export const email = Yup.string().required(fields.email.required).email(fields.email.valid);

export const password = Yup.string().required(fields.email.required).email(fields.email.valid);
