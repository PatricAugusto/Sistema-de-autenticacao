import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useAuth } from '../context/AuthContext'; // Importa useAuth
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
  StyledLinkButton,
  ForgotPasswordLink,
  ErrorMessage
} from './LoginForm.styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login, isLoading, authError } = useAuth(); // Usa o hook useAuth para obter as funções e estados
  const navigate = useNavigate(); // Hook para navegação programática

  const validateForm = () => {
    let isValid = true;

    // Validação de E-mail
    if (!email) {
      setEmailError('O e-mail é obrigatório.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Regex simples para validação de e-mail
      setEmailError('Por favor, insira um e-mail válido.');
      isValid = false;
    } else {
      setEmailError(''); // Limpa o erro se o e-mail for válido
    }

    // Validação de Senha
    if (!password) {
      setPasswordError('A senha é obrigatória.');
      isValid = false;
    } else if (password.length < 6) { // Exemplo: senha com no mínimo 6 caracteres
      setPasswordError('A senha deve ter no mínimo 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError(''); // Limpa o erro se a senha for válida
    }

    return isValid;
  };

  const handleSubmit = async (e) => { // Tornar handleSubmit assíncrono
    e.preventDefault();
    if (validateForm()) {
      const success = await login(email, password); // Chama a função de login do contexto
      if (success) {
        alert('Login bem-sucedido!');
        navigate('/dashboard'); // Redireciona para uma rota "logada" (criaremos em breve)
      } else {
        // Erro será exibido pelo authError vindo do contexto
        console.error('Falha no login:', authError);
      }
    } else {
      console.log('Validação local falhou.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Acesso ao Sistema</FormTitle>

      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError('');
          }}
          error={!!emailError}
          required
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError('');
          }}
          error={!!passwordError}
          required
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      </FormGroup>

      {/* Exibe o erro geral de autenticação se houver */}
      {authError && <ErrorMessage>{authError}</ErrorMessage>}

      <ForgotPasswordLink to="#">Esqueceu a senha?</ForgotPasswordLink>

      <Button type="submit" disabled={isLoading}> {/* Desabilita o botão enquanto carrega */}
        {isLoading ? 'Entrando...' : 'Entrar'}
      </Button>

      <StyledLinkButton to="/register">Não tem uma conta? Crie uma!</StyledLinkButton>
    </FormContainer>
  );
};

export default LoginForm;