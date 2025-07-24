import styled from 'styled-components';
import backgroundImage from '/images/backgroundSA.jpeg';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
`;

export const FormSection = styled.div`
  /* Largura fixa para a seção do formulário */
  width: 500px; /* Você pode ajustar este valor conforme a necessidade do formulário */
  min-width: 400px; /* Garante que o formulário não fique muito pequeno */
  flex-shrink: 0; /* Impede que esta seção encolha */

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  /* Media query para telas menores: o formulário ocupa 100% da largura */
  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
  }
`;

export const ContentWrapper = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px; /* Mantemos o max-width para o card dentro da FormSection */
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

export const ImageSection = styled.div`
  flex-grow: 1; /* <-- MUDANÇA AQUI: Permite que esta seção cresça para preencher o espaço restante */
  background-image: url(${backgroundImage}); magem */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;

  /* Media query para telas menores: ocultar a imagem */
  @media (max-width: 768px) {
    display: none;
  }
`;