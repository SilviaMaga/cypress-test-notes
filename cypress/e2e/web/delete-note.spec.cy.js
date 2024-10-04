describe('Delete Notes', () => {
    before(() => {
        // Login antes de cada teste
        cy.login('silvia.040612@gmail.com', 'senha123');
    });

    it('should delete the last existing note', () => {
        // Usa o comando personalizado para deletar a última nota
        cy.deleteLastNote();
    });

});
