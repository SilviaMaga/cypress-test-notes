import locators from '../locators/create-note'; // Importa os locators

// Comando para criar uma nova nota com título e conteúdo
Cypress.Commands.add('createNoteWithTitleAndContent', () => {
  cy.get(locators.addNewNote).click();
  cy.get(locators.noteCategory).select('Work');
  cy.get(locators.noteTitle).type('Nota com título');
  cy.get(locators.noteDescription).type('Criar uma nova nota com título e conteúdo.');
  cy.get(locators.noteSubmit).click();

  // Verifica se a nova nota foi criada com sucesso
  cy.contains('Nota com título').should('be.visible'); // Verifica se a nota aparece na página
});

// Comando para criar uma nova nota sem título
Cypress.Commands.add('createNoteWithoutTitle', () => {
  cy.get(locators.addNewNote).click();
  cy.get(locators.noteCategory).select('Work');
  cy.get(locators.noteDescription).type('Criar uma nova nota sem título.');
  cy.get(locators.noteSubmit).click();

  // Verifica se a mensagem de erro é exibida
  cy.get(locators.errorMessage)
    .should('be.visible')
    .and('contain', 'Title is required'); // Verifica a mensagem de erro
});