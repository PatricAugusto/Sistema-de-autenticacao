import React from 'react';
import { Navigate } from 'react-router-dom'; 
import { useAuth } from '../components/context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth(); // Pegamos o estado do usuário e de carregamento

  // Se ainda estiver carregando (ex: verificando token no localStorage), não faz nada ainda.
  // Em um sistema real, você teria um spinner global aqui.
  if (isLoading) {
    return <p>Verificando autenticação...</p>; // Placeholder para um loader real
  }

  // Se o usuário não estiver logado, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" replace />; // 'replace' impede que o usuário volte para a página protegida pelo histórico
  }

  // Se o usuário estiver logado, renderiza os componentes filhos (a página protegida)
  return children;
};

export default ProtectedRoute;