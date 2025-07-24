import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
  StyledLinkButton,
  ErrorMessage
} from './RegisterForm.styles';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { register, isLoading, authError } = useAuth(); // Usa o hook useAuth
  const navigate = useNavigate(); // Hook para navegação programática

  const validateForm = () => {
    let isValid = true;
    // Validação de Nome
    if (!name.trim()) { // .trim() remove espaços em branco do início/fim
      setNameError('O nome é obrigatório.');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validação de E-mail
    if (!email) {
      setEmailError('O e-mail é obrigatório.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Por favor, insira um e-mail válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validação de Senha
    if (!password) {
      setPasswordError('A senha é obrigatória.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter no mínimo 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Validação de Confirmação de Senha
    if (!confirmPassword) {
      setConfirmPasswordError('Confirme sua senha.');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('As senhas não coincidem.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (e) => { // Tornar handleSubmit assíncrono
    e.preventDefault();
    if (validateForm()) {
      const success = await register(name, email, password); // Chama a função de registro do contexto
      if (success) {
        alert('Registro bem-sucedido! Redirecionando para login...');
        navigate('/login'); // Redireciona para a tela de login após o registro
      } else {
        // Erro será exibido pelo authError vindo do contexto
        console.error('Falha no registro:', authError);
      }
    } else {
      console.log('Validação local falhou.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Criar Nova Conta</FormTitle>

      <FormGroup>
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          type="text"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError('');
          }}
          error={!!nameError}
          required
        />
        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
      </FormGroup>

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

      <FormGroup>
        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="********"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError('');
          }}
          error={!!confirmPasswordError}
          required
        />
        {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
      </FormGroup>

      {/* Exibe o erro geral de autenticação se houver */}
      {authError && <ErrorMessage>{authError}</ErrorMessage>}

      <Button type="submit" disabled={isLoading}> {/* Desabilita o botão enquanto carrega */}
        {isLoading ? 'Registrando...' : 'Registrar'}
      </Button>

      <StyledLinkButton to="/login">Já tem uma conta? Faça login!</StyledLinkButton>
    </FormContainer>
  );
};

export default RegisterForm;