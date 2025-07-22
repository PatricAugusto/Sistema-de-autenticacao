import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Um cinza claro para o fundo */
  font-family: 'Arial', sans-serif; /* Uma fonte corporativa */
`;

export const ContentWrapper = styled.div`
  background-color: #ffffff; /* Fundo branco para o card */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
  width: 100%;
  max-width: 400px; /* Largura máxima para centralizar */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaço entre os elementos internos */
  text-align: center; /* Centraliza o texto */
`;