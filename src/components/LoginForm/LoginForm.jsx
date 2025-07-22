import React, { useState } from 'react';
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Button,
  LinkButton,
  ForgotPasswordLink,
  ErrorMessage // Importamos o novo componente de erro
} from './LoginForm.styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); // Novo estado para erro do e-mail
  const [passwordError, setPasswordError] = useState(''); // Novo estado para erro da senha

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) { // Chama a validação antes de prosseguir
      console.log('Login attempt:', { email, password });
      alert('Login validado e dados enviados! Verifique o console.');
      // Aqui no futuro teremos a lógica de autenticação real (chamada de API)
    } else {
      console.log('Validação falhou. Corrija os erros.');
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
            setEmailError(''); // Limpa o erro ao digitar novamente
          }}
          required
        />
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>} {/* Exibe o erro se existir */}
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
            setPasswordError(''); // Limpa o erro ao digitar novamente
          }}
          required
        />
        {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>} {/* Exibe o erro se existir */}
      </FormGroup>

      <ForgotPasswordLink href="#">Esqueceu a senha?</ForgotPasswordLink>

      <Button type="submit">Entrar</Button>

      <LinkButton href="#">Não tem uma conta? Crie uma!</LinkButton>
    </FormContainer>
  );
};

export default LoginForm;