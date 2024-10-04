describe('Edit Note', () => {
    beforeEach(() => {
        // Login antes de cada teste
        cy.login('silvia.040612@gmail.com', 'senha123');
    });

    it('should edit the last existing note', () => {
        // Chama o comando para editar a nota
        cy.editNote('Título Editado', 'Descrição editada da nota.');
    });
});
