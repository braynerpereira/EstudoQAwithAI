/**
 * Encapsulamento dos dados de teste para os cenários de autenticação
 */
export const loginData = {
  // Credenciais válidas
  validUser: {
    username: process.env.USER_LOGIN || 'standard_user',
    password: process.env.USER_PASSWORD || 'secret_sauce',
  },

  // Usuário bloqueado
  lockedOutUser: {
    username: 'locked_out_user',
    password: process.env.USER_PASSWORD || 'secret_sauce',
  },

  // Usuário com senha incorreta
  invalidPassword: {
    username: 'standard_user',
    password: 'senha_incorreta_123',
  },

  // Usuário não cadastrado / inexistente
  invalidUser: {
    username: 'usuario_inexistente_xyz',
    password: 'secret_sauce',
  },

  // Ambos os campos vazios
  emptyCredentials: {
    username: '',
    password: '',
  },

  // Apenas Username preenchido
  onlyUsername: {
    username: 'standard_user',
    password: '',
  },

  // Apenas Password preenchido
  onlyPassword: {
    username: '',
    password: 'secret_sauce',
  },

  // Mensagens de erro esperadas na interface
  errorMessages: {
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  },
} as const;

