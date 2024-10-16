describe('Demosauce site', () => {
  beforeEach( "Precondicion: Hacer Login", () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('input[name="user-name"]').type('standard_user');
        
    // Enter password
    cy.get('input[name="password"]').type('secret_sauce');
    
    // Click the login button
    cy.get('input[type="submit"]').click();
})

it('Test', () => {
  cy.wait(1000)
})
})