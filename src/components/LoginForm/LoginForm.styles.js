import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FormTitle = styled.h2`
  color: #333333;
  margin-bottom: 20px;
  font-size: 1.8em;
  font-weight: 600;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Label = styled.label`
  font-size: 0.9em;
  color: #333333;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid ${props => props.error ? '#dc3545' : '#cccccc'}; /* Borda vermelha se houver erro */
  border-radius: 6px;
  font-size: 1em;
  color: #aaaaaa;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${props => props.error ? '#dc3545' : '#007bff'}; /* Borda vermelha ou azul ao focar */
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.error ? 'rgba(220, 53, 69, 0.25)' : 'rgba(0, 123, 255, 0.25)'};
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
  }
`;

export const StyledLinkButton = styled(Link)` /* MUDANÇA AQUI: styled(Link) */
  color: #007bff;
  font-size: 0.9em;
  text-decoration: none;
  margin-top: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

export const ForgotPasswordLink = styled(StyledLinkButton)` /* MUDANÇA AQUI: reutiliza StyledLinkButton */
  margin-top: -10px;
  text-align: right;
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.85em;
  margin-top: 5px;
  text-align: left;
`;