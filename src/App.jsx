import React from 'react';
import AuthLayout from './components/AuthLayout/AuthLayout';
import RegisterForm from './components/RegisterForm/RegisterForm'; // Importa o RegisterForm
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthLayout>
        <RegisterForm /> {/* Renderiza o RegisterForm aqui */}
      </AuthLayout>
    </>
  );
}

export default App;