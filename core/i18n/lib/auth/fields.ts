const fields = {
  type: {
    options: [
      { value: 'GIVER', label: 'Doador' },
      { value: 'GRANTEE', label: 'Donatário' },
    ],
    required: 'Selecione um perfil.',
  },

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

  document: {
    label: 'CPF',
    valid: 'Digite um CPF válido.',
    required: 'Digite um CPF.',
  },

  password: {
    label: 'Senha',
    required: 'Digite sua senha.',
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
