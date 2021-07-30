import * as Yup from 'yup';

/**
 * Fields.
 */
export const city = Yup.string()
  .required('Digite o nome da sua cidade.');

export const name = Yup.string()
  .required('Digite seu nome completo.');

export const email = Yup.string()
  .email('Digite um e-mail válido.')
  .required('Digite um e-mail.');

export const state = Yup.string()
  .required('Digite seu estado.');

export const phone = Yup.string()
  .required('Digite seu telefone para contato.');

export const street = Yup.string()
  .required('Digite seu endereço.');

export const number = Yup.string()
  .required('Digite o número da sua residência.');

export const document = Yup.string()
  .min(14, 'Digite um CPF válido.')
  .required('Digite um CPF.');

export const password = Yup.string()
  .required('Digite sua senha.');

export const description = Yup.string()
  .required('Digite quais são as suas necessidades.');

export const neighborhood = Yup.string()
  .required('Digite o bairro da sua residência.');

export const confirm_password = Yup.string()
  .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais.')
  .required('Digite a confirmação da senha.');

/**
 * Groups.
 */
export const address = Yup.array().of(
  Yup.object().shape({
    city,
    state,
    street,
    number,
    neighborhood,
  }),
);

export const observation = Yup.object().shape({
  description,
});
