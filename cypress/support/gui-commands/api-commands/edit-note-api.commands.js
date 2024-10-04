Cypress.Commands.add('getNotes', () => {
    return cy.request({
        method: 'GET',
        url: 'https://practice.expandtesting.com/notes/api/notes',
        headers: {
            'accept': 'application/json',
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a',
        },
    }).then((response) => {
        // Loga o corpo da resposta para inspeção
        console.log(response.body);

        // Loga os IDs das notas, se existir a propriedade 'data'
        if (response.body.data && Array.isArray(response.body.data)) {
            response.body.data.forEach(note => {
                console.log(`Nota ID: ${note.id}`); // Loga o ID de cada nota
            });

            return response.body.data; // Retorna a lista de notas
        }

        return []; // Retorna um array vazio se não houver notas
    });
});

Cypress.Commands.add('editNote', (noteId, updatedData) => {
    return cy.request({
        method: 'PUT',
        url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`,
        headers: {
            'accept': 'application/json',
            'x-auth-token': '28f4405fe8e9421f95559e17926e9ec417ade9a517d9414f93917b9f4947969a',
            'content-type': 'application/json',
        },
        body: updatedData,
    }).then((response) => {
        // Loga o corpo da resposta para inspeção
        console.log(response.body);

        // Verificações após a requisição
        expect(response.status).to.eq(200); // Verifica se o status é 200
        expect(response.body).to.have.property('success'); // Verifica se a propriedade 'success' existe
        expect(response.body).to.have.property('data'); // Verifica se a propriedade 'data' existe

        return response.body.data; // Retorna os dados da resposta
    });
});
