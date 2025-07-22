import React from 'react';
import { Container, ContentWrapper } from './AuthLayout.styles';

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  );
};

export default AuthLayout;