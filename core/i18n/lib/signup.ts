const signup = {
  auth: [
    'Já é cadastrado?',
    'Entrar',
  ],

  title: 'Cadastrar',
  description: 'Crie sua conta gratuitamente e em poucos segundos.',

  fields: {
    name: {
      label: 'Nome completo',
      required: 'Digite seu nome completo',
    },

    email: {
      label: 'E-mail',
      valid: 'Digite um e-mail válido',
      required: 'Digite um e-mail',
    },

    password: {
      label: 'Senha',
      required: 'Digite sua senha',
    },
  },

  button: {
    one: 'Avançar',
    two: 'Cadastrar',
  },
};

export default signup;
