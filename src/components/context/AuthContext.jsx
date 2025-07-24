import React, { createContext, useState, useContext } from 'react';
import { fakeAuthService } from '../services/authServices'; // Iremos criar este arquivo em breve

// 1. Criação do Contexto
export const AuthContext = createContext(null);

// 2. Provedor do Contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar informações do usuário logado
  const [isLoading, setIsLoading] = useState(false); // Estado para indicar se uma operação de autenticação está em andamento
  const [authError, setAuthError] = useState(null); // Estado para armazenar mensagens de erro de autenticação

  // Função para simular o login
  const login = async (email, password) => {
    setIsLoading(true);
    setAuthError(null); // Limpa erros anteriores
    try {
      // Chama o serviço de autenticação falso
      const userData = await fakeAuthService.login(email, password);
      setUser(userData); // Define o usuário como logado
      // No futuro, você salvaria o token aqui (ex: localStorage.setItem('token', userData.token);)
      return true; // Indica sucesso
    } catch (error) {
      setAuthError(error.message || 'Erro ao fazer login.');
      setUser(null);
      return false; // Indica falha
    } finally {
      setIsLoading(false);
    }
  };

  // Função para simular o registro
  const register = async (name, email, password) => {
    setIsLoading(true);
    setAuthError(null); // Limpa erros anteriores
    try {
      // Chama o serviço de autenticação falso
      const userData = await fakeAuthService.register(name, email, password);
      setUser(userData); // Define o usuário como logado após o registro
      // No futuro, você salvaria o token aqui
      return true; // Indica sucesso
    } catch (error) {
      setAuthError(error.message || 'Erro ao registrar.');
      setUser(null);
      return false; // Indica falha
    } finally {
      setIsLoading(false);
    }
  };

  // Função para simular o logout
  const logout = () => {
    setUser(null); // Limpa o usuário
    // No futuro, você removeria o token daqui (ex: localStorage.removeItem('token');)
    console.log('Usuário deslogado.');
  };

  // O valor que será disponibilizado para todos os componentes filhos
  const authContextValue = {
    user,
    isLoading,
    authError,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};