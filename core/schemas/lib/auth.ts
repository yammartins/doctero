import { fields } from '@core/i18n';
import * as Yup from 'yup';

export const name = Yup.string().required(fields.name.required);

export const email = Yup.string().required(fields.email.required).email(fields.email.valid);

export const password = Yup.string().required(fields.password.required);
