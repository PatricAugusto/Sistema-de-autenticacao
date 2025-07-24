// Um pequeno atraso para simular uma chamada de rede
const simulateNetworkDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// "Banco de dados" de usuários simulado
const usersDB = [];

export const fakeAuthService = {
  /**
   * Simula um processo de login.
   * @param {string} email
   * @param {string} password
   * @returns {Promise<object>} Objeto do usuário logado em caso de sucesso.
   * @throws {Error} Se o login falhar.
   */
  login: async (email, password) => {
    await simulateNetworkDelay(1000); // 1 segundo de atraso

    const user = usersDB.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('Fake Auth Service: Login bem-sucedido para', user.email);
      // Retorna uma cópia do usuário (sem a senha, idealmente)
      return { id: user.id, name: user.name, email: user.email, token: 'fake-jwt-token' };
    } else {
      console.error('Fake Auth Service: Credenciais inválidas para', email);
      throw new Error('Credenciais inválidas.');
    }
  },

  /**
   * Simula um processo de registro.
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {Promise<object>} Objeto do novo usuário registrado.
   * @throws {Error} Se o registro falhar (ex: e-mail já existe).
   */
  register: async (name, email, password) => {
    await simulateNetworkDelay(1500); // 1.5 segundos de atraso

    const existingUser = usersDB.find(u => u.email === email);
    if (existingUser) {
      console.error('Fake Auth Service: E-mail já registrado:', email);
      throw new Error('Este e-mail já está em uso.');
    }

    const newUser = {
      id: usersDB.length + 1, // ID simples
      name,
      email,
      password, // Em um sistema real, a senha seria hash
    };
    usersDB.push(newUser);
    console.log('Fake Auth Service: Usuário registrado com sucesso:', newUser.email);
    // Retorna uma cópia do novo usuário (sem a senha)
    return { id: newUser.id, name: newUser.name, email: newUser.email, token: 'fake-jwt-token' };
  },

  /**
   * Simula a recuperação de informações do usuário logado via token.
   * Em um sistema real, isso validaria um token JWT.
   * @param {string} token
   * @returns {Promise<object | null>} Objeto do usuário ou null.
   */
  getCurrentUser: async (token) => {
    await simulateNetworkDelay(500);
    // Para simplificar, se tivermos um token "fake", fingimos que o primeiro usuário logado é ele
    if (token === 'fake-jwt-token' && usersDB.length > 0) {
        return { id: usersDB[0].id, name: usersDB[0].name, email: usersDB[0].email };
    }
    return null;
  }
};