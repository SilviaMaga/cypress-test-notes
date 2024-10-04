describe('Login API', () => {

  it('should log in successfully with valid credentials', () => {
    cy.validateSuccessfulLogin('silvia.040612@gmail.com', 'senha123'); // Login com sucesso
  });

  it('should not log in with invalid credentials', () => {
    cy.validateFailedLogin('invalid.email@example.com', 'wrongpassword', 'Incorrect email address or password'); // Login com falha
  });

});
