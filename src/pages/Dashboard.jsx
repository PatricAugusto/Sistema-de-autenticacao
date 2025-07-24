import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../components/context/AuthContext'; 
import { Button } from '../components/LoginForm/LoginForm.styles'; 

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ocupa a altura total do AuthLayout ContentWrapper */
  padding: 20px;
  color: #333;
  text-align: center;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 15px;
  color: #007bff; /* Usamos a cor principal do nosso sistema */
`;

const UserInfo = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  color: #555;
`;

const Dashboard = () => {
  const { user, logout } = useAuth(); // Pegamos o usuário logado e a função de logout do contexto

  // Verificamos se há um usuário. Em um caso real, o ProtectedRoute já faria isso.
  // Mas é bom ter uma checagem extra e para acessar user.name.
  if (!user) {
    return <p>Carregando informações do usuário...</p>; // Ou algum loader simples
  }

  return (
    <DashboardContainer>
      <WelcomeTitle>Bem-vindo(a), {user.name || user.email}!</WelcomeTitle> {/* Mostra o nome ou e-mail */}
      <UserInfo>Você está agora na área restrita do sistema.</UserInfo>
      <Button onClick={logout}>Sair</Button> {/* Botão para deslogar */}
    </DashboardContainer>
  );
};

export default Dashboard;