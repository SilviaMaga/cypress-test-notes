describe('API Automation - Notes', () => {
  it('Should successfully retrieve notes', () => {
    cy.getNotes().then((response) => {
    });
  });
});