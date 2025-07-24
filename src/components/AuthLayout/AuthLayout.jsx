import React from 'react';
import { Container, FormSection, ContentWrapper, ImageSection } from './AuthLayout.styles'; 

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <FormSection> 
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </FormSection>
      <ImageSection /> 
    </Container>
  );
};

export default AuthLayout;