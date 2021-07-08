const fields = {
  city: {
    label: 'Cidade',
    required: 'Digite o nome da sua cidade.',
  },

  name: {
    label: 'Nome completo',
    required: 'Digite seu nome completo.',
  },

  state: {
    label: 'Estado',
    required: 'Digite seu estado.',
  },

  phone: {
    label: 'Telefone',
    required: 'Digite seu telefone para contato.',
  },

  email: {
    label: 'E-mail',
    valid: 'Digite um e-mail válido.',
    required: 'Digite um e-mail.',
  },

  street: {
    label: 'Endereço',
    required: 'Digite seu endereço.',
  },

  number: {
    label: 'Número',
    required: 'Digite o número da sua residência.',
  },

  grantee: {
    label: 'Precisa de alguma ajuda?',
    tooltip: 'Se precisa de ajuda financeira, alimentícia.',
  },

  feedback: {
    error: 'Dados incorretos, tente novamente.',
    loading: 'Carregando...',
  },

  document: {
    label: 'CPF',
    valid: 'Digite um CPF válido.',
    required: 'Digite um CPF.',
  },

  password: {
    label: 'Senha',
    required: 'Digite sua senha.',
  },

  observation: {
    label: 'Descreva sua necessidade',
    required: 'Digite quais são as suas necessidades',
  },

  neighborhood: {
    label: 'Bairro',
    required: 'Digite o bairro da sua residência.',
  },

  confirm_password: {
    label: 'Confirmação de senha',
    valid: 'As senhas precisam ser iguais.',
    required: 'Digite a confirmação da senha.',
  },
};

export default fields;
