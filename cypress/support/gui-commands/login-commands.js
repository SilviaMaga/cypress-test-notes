const locLogin = require('../locators/login');

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get(locLogin.buttonLogin).contains('Login').click();
    cy.get(locLogin.user).type(email);
    cy.get(locLogin.password).type(password, { log: false });
    cy.get(locLogin.confirm).click();

    // Validar se o login foi efetuado com sucesso
    cy.url().should('include', '/notes'); // Verifique a URL após o login
});

Cypress.Commands.add('checkErrorNotification', (message) => {
    cy.get('.toast, .alert, .notification', { timeout: 10000 })
        .should('be.visible')
        .and('contain', message);
});