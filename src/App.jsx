import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout/AuthLayout';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { AuthProvider } from './components/context/AuthContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import Dashboard from './pages/Dashboard'; 
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
      <Router>
        <AuthProvider>
          {/* AuthLayout envolve apenas as rotas de autenticação */}
          <Routes>
            <Route path="/login" element={<AuthLayout><LoginForm /></AuthLayout>} />
            <Route path="/register" element={<AuthLayout><RegisterForm /></AuthLayout>} />

            {/* Rota Protegida */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AuthLayout> {/* Mantemos o AuthLayout para consistência visual */}
                    <Dashboard />
                  </AuthLayout>
                </ProtectedRoute>
              }
            />

            {/* Redirecionar para login como rota padrão */}
            <Route path="*" element={<AuthLayout><LoginForm /></AuthLayout>} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;