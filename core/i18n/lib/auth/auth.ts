const auth = {
  title: 'Entrar',
  description: 'Acesse sua conta para ter acesso à todas as suas informações.',

  fields: {
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

  signup: [
    'Não possui conta?',
    'Cadastrar',
  ],

  button: 'Entrar',

  recovery: 'Esqueceu a senha?',
};

export default auth;
