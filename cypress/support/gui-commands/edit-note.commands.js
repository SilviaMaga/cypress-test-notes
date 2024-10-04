import locators from '../locators/edit-note';

// Adiciona um comando personalizado para editar uma nota
Cypress.Commands.add('editNote', (newTitle, newDescription) => {
    // Verifica se a categoria está visível
    cy.get(locators.categoryAll).should('be.visible');

    // Clica no botão de editar da última nota
    cy.get(locators.noteCard).last().find(locators.noteEditButton).click();

    // Limpa e preenche o título e a descrição da nota
    cy.get(locators.noteTitle).clear().type(newTitle);
    cy.get(locators.noteDescription).clear().type(newDescription);

    // Clica no botão de submissão
    cy.get(locators.noteSubmit).click();

    // Verifica se a última nota foi editada corretamente
    cy.get(locators.noteCard).last().find(locators.noteCardTitle)
        .should('be.visible')
        .and('contain', newTitle); // Confirma que o título foi atualizado
});


