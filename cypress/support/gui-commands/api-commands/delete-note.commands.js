Cypress.Commands.add('fetchNotes', () => {
    return cy.request({
        method: 'GET',
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
            'accept': 'application/json', // Aceita o tipo de conteúdo JSON
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a' // Token de autenticação
        },
        failOnStatusCode: false // Permite que a requisição não falhe em códigos de status de erro
    }).then((response) => {
        // Loga a resposta completa no console do Cypress
        cy.log(JSON.stringify(response.body));

        // Verifica se o status da resposta é 200 (requisição bem-sucedida)
        expect(response.status).to.eq(200);

        // Verifica se o corpo da resposta é um objeto
        expect(response.body).to.be.an('object');

        // Verifica se a resposta contém a propriedade que armazena as notas
        expect(response.body).to.have.property('data');

        // Verifica se a propriedade 'data' é um array de notas
        expect(response.body.data).to.be.an('array');

        // Verifica se pelo menos uma nota foi retornada
        expect(response.body.data.length).to.be.greaterThan(0);

        // Pega o ID da última nota e retorna via `cy.wrap()` para garantir o encadeamento correto
        return cy.wrap(response.body.data[response.body.data.length - 1].id);
    });
});

// Comando para deletar uma nota
Cypress.Commands.add('deleteNote', (noteId) => {
    return cy.request({
        method: 'DELETE',
        url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`,
        headers: {
            'accept': 'application/json', // Aceita o tipo de conteúdo JSON
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a' // Token de autenticação
        },
        failOnStatusCode: false // Permitir que o teste continue, mesmo que a deleção falhe
    });
});


