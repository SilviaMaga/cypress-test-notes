describe('Login', () => {

  it('Successfully logs in', () => {
    cy.login('silvia.040612@gmail.com', 'senha123');

    // Verifica se a URL foi redirecionada corretamente após o login
    cy.url().should('include', '/notes'); // Verifica se a URL contém '/notes'
  });

  it('Displays error message with incorrect credentials', () => {
    cy.login('usuario.invalido@gmail.com', 'senhaIncorreta');

    // Verifica a mensagem de erro
    cy.checkErrorNotification('Incorrect email address or password');
  });
});

