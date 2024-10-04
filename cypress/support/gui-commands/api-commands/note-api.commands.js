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
    }

    // Verificações após a requisição
    expect(response.status).to.eq(200); // Verifica se o status é 200

    // Ajusta asserções com base na estrutura real do corpo
    expect(response.body).to.have.property('success'); // Verifica se a propriedade 'success' existe
    expect(response.body).to.have.property('data'); // Verifica se a propriedade 'data' existe

    // Se 'data' for um array, você pode verificar isso:
    expect(response.body.data).to.be.an('array'); // Verifica se 'data' é um array

    return response; // Retorna a resposta para uso posterior, se necessário
  });
});