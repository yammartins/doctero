import {
  ref,
  array,
  string,
  object,
} from 'yup';

/**
 * Fields.
 */
export const city = string()
  .required('Digite o nome da sua cidade.');

export const name = string()
  .required('Digite seu nome completo.');

export const email = string()
  .email('Digite um e-mail válido.')
  .required('Digite um e-mail.');

export const state = string()
  .required('Digite seu estado.');

export const phone = string()
  .required('Digite seu telefone para contato.');

export const street = string()
  .required('Digite seu endereço.');

export const number = string()
  .required('Digite o número da sua residência.');

export const document = string()
  .min(14, 'Digite um CPF válido.')
  .required('Digite um CPF.');

export const password = string()
  .required('Digite sua senha.');

export const description = string()
  .required('Digite quais são as suas necessidades.');

export const neighborhood = string()
  .required('Digite o bairro da sua residência.');

export const confirm_password = string()
  .oneOf([ref('password'), null], 'As senhas precisam ser iguais.')
  .required('Digite a confirmação da senha.');

/**
 * Groups.
 */
export const addresses = array().of(
  object().shape({
    city,
    state,
    street,
    number,
    neighborhood,
  }),
);

export const observation = object().shape({
  description,
});
