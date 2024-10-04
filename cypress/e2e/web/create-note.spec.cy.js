describe('Create Note', () => {
    beforeEach(() => {
        // Login antes de cada teste
        cy.login('silvia.040612@gmail.com', 'senha123');
    });

    it('should create a new note with title and content', () => {
        // Chama o comando para criar uma nova nota
        cy.createNoteWithTitleAndContent();
    });

    it('should show an error when trying to create a note without a title', () => {
        // Chama o comando para criar uma nova nota sem título
        cy.createNoteWithoutTitle();
    });
});