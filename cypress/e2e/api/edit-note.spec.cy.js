describe('API Automation - Edit Note', () => {
    it('Should retrieve and edit the last note successfully', () => {
        // Recupera as notas
        cy.getNotes().then((notes) => {
            // Verifica se há notas disponíveis
            expect(notes).to.not.be.empty; // Verifica se a lista de notas não está vazia

            // Pega o último ID de nota
            const lastNoteId = notes[notes.length - 1].id;

            // Dados atualizados para a nota
            const updatedData = {
                title: 'Título editado API',
                description: 'Criar uma nova nota com título e conteúdo.',
                category: 'Work',
                completed: false,
            };

            // Edita a nota usando o ID obtido
            cy.editNote(lastNoteId, updatedData).then((updatedNote) => {
                // Aqui, você pode usar o `updatedNote` se precisar
                expect(updatedNote).to.have.property('title', 'Título editado API'); // Verifica se o título foi atualizado
            });
        });
    });
});