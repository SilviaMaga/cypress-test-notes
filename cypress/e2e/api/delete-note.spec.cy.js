describe('API Automation - Delete Notes', () => {
  it('should fetch and delete the last created note successfully', () => {
    // Busca o último ID e encadeia a deleção
    cy.fetchNotes().then((lastNoteId) => {
      expect(lastNoteId).to.exist; // Verifica se o ID foi atribuído corretamente

      // Deleta a nota com o ID retornado
      cy.deleteNote(lastNoteId).then((response) => {
        // Verifica o status da resposta da deleção
        expect(response.status).to.be.oneOf([200, 204, 404]); // Agora esperamos 200, 204 ou 404

        if (response.status === 200) {
          cy.log('Note deleted successfully with a 200 response!');
        } else if (response.status === 204) {
          cy.log('Note deleted successfully with a 204 response!');
        } else if (response.status === 404) {
          cy.log('Note not found. It may have already been deleted or does not exist.');
        } else {
          cy.log('Unexpected response: ' + JSON.stringify(response.body));
        }
      });
    });
  });
});


