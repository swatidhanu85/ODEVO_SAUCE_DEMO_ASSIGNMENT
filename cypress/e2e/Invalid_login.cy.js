import { ERROR_MSG_EMPTY_INPUT, ERROR_MSG_INVALID_INPUT, LOGIN_BUTTON, PASSWORD_INPUT, USERID_INPUT } from "../support/FieldRef";

describe('login Test', () => {
    it('Case: Invalid Login', () => {
      cy.visit(Cypress.config().baseUrl)
      cy.get(USERID_INPUT).type('standard_user');
          
      // Enter password
      cy.get(PASSWORD_INPUT).type('abcd');
      
      // Click the login button
      cy.get(LOGIN_BUTTON).click();

      //should show error messsage
      cy.get(ERROR_MSG_INVALID_INPUT).should('be.visible');
  })

  it('Empty field', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get(LOGIN_BUTTON).type(' ');
        
    // Enter password
    cy.get(PASSWORD_INPUT).type(' ');
    
    // Click the login button
    cy.get(LOGIN_BUTTON).click();

    //should show error messsage
    cy.get(ERROR_MSG_EMPTY_INPUT).should('be.visible');
})
}) 