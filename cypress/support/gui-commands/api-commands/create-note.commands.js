Cypress.Commands.add('validateCreateNote', (title, description, category, completed) => {
    cy.request({
        method: 'POST',
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a' // Token de autenticação
        },
        body: {
            title: title,
            description: description,
            category: category,
            completed: completed
        },
        failOnStatusCode: false // Evitar que o Cypress falhe automaticamente em códigos de erro
    }).then((response) => {
        // Valida que a nota foi criada com sucesso
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('title', title);
        expect(response.body.data).to.have.property('description', description);
    });
});

// Comando para validar erro de título inválido
Cypress.Commands.add('validateCreateNoteWithInvalidTitle', (title, description, category, completed, expectedErrorMessage) => {
    cy.request({
        method: 'POST',
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a' // Token de autenticação
        },
        body: {
            title: title, // Título inválido
            description: description,
            category: category,
            completed: completed
        },
        failOnStatusCode: false // Evitar que o Cypress falhe automaticamente em códigos de erro
    }).then((response) => {
        // Valida que a nota NÃO foi criada e retornou o erro esperado
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('message', expectedErrorMessage);
    });
});