import React, { useState } from 'react';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
  LinkButton,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registro attempt:', { name, email, password });
      alert('Registro validado e dados enviados! Verifique o console.');
      // Futuramente: chamar uma API de registro
    } else {
      console.log('Validação de registro falhou. Corrija os erros.');
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
          error={!!nameError} // Passa a prop error se houver erro
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
          error={!!emailError} // Passa a prop error se houver erro
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
          error={!!passwordError} // Passa a prop error se houver erro
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
          error={!!confirmPasswordError} // Passa a prop error se houver erro
          required
        />
        {confirmPasswordError && <ErrorMessage>{confirmPasswordError}</ErrorMessage>}
      </FormGroup>

      <Button type="submit">Registrar</Button>

      {/* Exemplo de botão para ir para o login */}
      <LinkButton href="#">Já tem uma conta? Faça login!</LinkButton>
    </FormContainer>
  );
};

export default RegisterForm;