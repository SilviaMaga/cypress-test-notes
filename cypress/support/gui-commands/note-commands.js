import locNotes from '../locators/notes';

Cypress.Commands.add('checkMyNotes', () => {
    // Verifica se a seção MyNotes está visível
    cy.get(locNotes.myNotes).should('be.visible');
    // Clica na categoria ALL
    cy.get(locNotes.categoryAll).click();

});