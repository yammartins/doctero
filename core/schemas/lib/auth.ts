import { fields } from '@core/i18n';
import * as Yup from 'yup';

export const city = Yup.string()
  .required(fields.city.required);

export const name = Yup.string()
  .required(fields.name.required);

export const email = Yup.string()
  .email(fields.email.valid)
  .required(fields.email.required);

export const street = Yup.string()
  .required(fields.street.required);

export const number = Yup.string()
  .required(fields.number.required);

export const document = Yup.string()
  .min(14, fields.document.valid)
  .required(fields.document.required);

export const password = Yup.string()
  .required(fields.password.required);

export const neighborhood = Yup.string()
  .required(fields.neighborhood.required);
