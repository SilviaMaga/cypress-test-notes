describe('Notes', () => {
    before(() => {
        // Login antes de cada teste
        cy.login('silvia.040612@gmail.com', 'senha123');
    });

    it('should display MyNotes and show all notes', () => {
        // Utiliza o comando para verificar MyNotes
        cy.checkMyNotes();
    });
});
