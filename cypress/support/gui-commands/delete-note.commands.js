import locators from '../locators/delete-note';

Cypress.Commands.add('deleteLastNote', () => {
    // Captura o último cartão de nota
    cy.get(locators.noteCard).last().within(() => {
        // Clica no botão de deletar
        cy.get(locators.deleteButton).click();
        // Confirma a exclusão
        cy.get(locators.deleteConfirmButton).should('exist').click();
    });
});