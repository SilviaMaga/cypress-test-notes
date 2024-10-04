describe('API Automation - Create Note', () => {

  // Criação de nota com sucesso
  it('should create a new note successfully', () => {
    cy.validateCreateNote('test create', 'test', 'Personal', true); // Valida a criação de uma nota com sucesso
  });

  // Criação de nota com título inválido
  it('should not allow creating a note with an invalid title', () => {
    cy.validateCreateNoteWithInvalidTitle('', 'Nota sem título', 'Personal', true, 'Title must be between 4 and 100 characters'); // Valida erro de título inválido
  });
});