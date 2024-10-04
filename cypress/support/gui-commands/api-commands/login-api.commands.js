Cypress.Commands.add('loginRequest', (email, password) => {
    return cy.request({
        method: 'POST',
        url: 'https://practice.expandtesting.com/notes/api/users/login',
        body: {
            email: email,
            password: password,
        },
        failOnStatusCode: false // Controla falhas baseadas no status da resposta
    });
});

Cypress.Commands.add('validateSuccessfulLogin', (email, password) => {
    cy.loginRequest(email, password)
        .then((response) => {
            cy.log(JSON.stringify(response.body)); // Loga a resposta no console para inspecionar

            expect(response.status).to.eq(200); // Verifica se o status é 200

            // Verifica se o token está presente em response.body.data.token
            expect(response.body.data).to.have.property('token'); // Verifica se o token está presente no campo data
        });
});

Cypress.Commands.add('validateFailedLogin', (email, password, expectedMessage) => {
    cy.loginRequest(email, password)
        .then((response) => {
            expect(response.status).to.eq(401); // Verifica se o status é 401 Unauthorized
            expect(response.body).to.have.property('message'); // Verifica se a resposta contém uma mensagem
            expect(response.body.message).to.eq(expectedMessage); // Verifica a mensagem de erro
        });
});